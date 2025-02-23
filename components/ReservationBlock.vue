<template>
  <div class="p-5 lg:p-10 bg-slate-200 dark:bg-blue-800/10 rounded-b-xl">
    <h3
      class="text-5xl font-medium font-subtitle text-slate-700 mb-5 dark:text-slate-200"
    >
      Réservation
    </h3>
    <UForm :schema="schema" :state="state" @submit="onSubmit">
      <div class="flex flex-col lg:flex-row gap-10">
        <div>
          <h4
            class="font-semibold text-slate-700 text-2xl mb-3 dark:text-slate-400"
          >
            Choisissez des dates
          </h4>
          <client-only>
            <VDatePicker
              class="border border-slate-300 border-solid w-full dark:border-slate-700"
              v-model.range="range"
              expanded
              is24hr
              is-dark="system"
              :disabled-dates="cabane.disabledDates"
              :rules="cabane.availabilityRules"
              :mode="
                (cabane.timePeriods || []).length > 0 ? undefined : 'dateTime'
              "
              :columns="columns"
          /></client-only>
          <UFormGroup
            label="Période de réservation"
            name="timePeriod"
            v-if="cabane.timePeriods.length > 0"
            class="mt-5"
          >
            <USelect
              v-model="state.timePeriod"
              :options="cabane.timePeriods"
              option-attribute="name"
              label="Période de réservation"
            />
          </UFormGroup>
        </div>
        <div class="flex-1">
          <h4
            class="font-semibold text-slate-700 text-2xl mb-3 dark:text-slate-400"
          >
            Informations Personnelles
          </h4>
          <div class="grid lg:grid-cols-2 gap-5 mb-5">
            <UFormGroup label="Prénom" name="firstname">
              <UInput v-model="state.firstname" />
            </UFormGroup>
            <UFormGroup label="Nom" name="lastname">
              <UInput v-model="state.lastname" />
            </UFormGroup>
          </div>
          <div class="grid lg:grid-cols-2 gap-5 mb-5">
            <UFormGroup label="Email" name="email">
              <UInput v-model="state.email" />
            </UFormGroup>
            <UFormGroup label="Téléphone" name="phone">
              <UInput v-model="state.phone" />
            </UFormGroup>
          </div>
          <UFormGroup label="Unité" name="unit" class="mb-5">
            <UInput v-model="state.unit" />
          </UFormGroup>
          <UFormGroup label="Description de l'activité" name="description">
            <UTextarea v-model="state.description" />
          </UFormGroup>
          <UButton
            type="submit"
            color="blue"
            variant="solid"
            size="lg"
            class="mt-5"
            >Envoyer la demande de réservation</UButton
          >
        </div>
      </div>
    </UForm>
    <UModal v-model="modalOpen">
      <div class="p-5">
        <h3
          class="text-3xl text-center font-medium font-subtitle text-slate-700 dark:text-slate-200 mb-5"
        >
          Conditions de Réservation
        </h3>
        <p class="text-slate-800 dark:text-slate-200 mb-5">
          En envoyant votre demande vous vous engagez à accepter les conditions
          de réservation suivantes. Veuillez toutes les cocher pour valider.
        </p>
        <Condition
          v-for="(cond, i) in cabane.conditions"
          :key="cond"
          :text="cond"
          v-model="validated.conditions[i]"
        />
        <UButton
          :disabled="!allGood"
          color="blue"
          class="mt-5"
          @click="onSend"
          :loading="isLoading"
        >
          Envoyer
        </UButton>
      </div>
    </UModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScreens } from "vue-screen-utils";
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const runtimeConfig = useRuntimeConfig();
const props = defineProps(["id"]);

const { mapCurrent } = useScreens({
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
});

const columns = mapCurrent({ lg: 2 }, 1);

function tryParse(value: string) {
  try {
    const val = JSON.parse(value);
    if (!val) {
      return undefined;
    }
  } catch {
    return undefined;
  }
}

/* Calendar configuration */
const cabane = ref<{
  nom: string;
  availabilityRules: object;
  prices: string | undefined;
  disabledDates: object;
  conditions: Array<string>;
  timePeriods: Array<{
    value: number;
    name: string;
    hourStart: string;
    hourEnd: string;
    minuteStart: string;
    minuteEnd: string;
  }>;
}>(
  await fetch(
    `${runtimeConfig.public.baseUrl}/api/v1/public/netBS/apmbs/cabane-metadata/${props.id}`
  ).then((res) =>
    res.json().then((data) => {
      return {
        ...data,
        disabledDates: tryParse(data.disabledDates),
        availabilityRules: tryParse(data.availabilityRules),
      };
    })
  )
);

const modalOpen = ref(false);
const range = ref({
  start: null as Date | null,
  end: null as Date | null,
});

const schema = z.object({
  email: z
    .string({ message: "Veuillez entrer votre adresse e-mail" })
    .email("Veuillez entrer une adresse email valide"),
  firstname: z.string({ message: "Veuillez entrer votre prénom" }),
  lastname: z.string({ message: "Veuillez entrer votre nom" }),
  phone: z.string({ message: "Veuillez entrer votre numéro de téléphone" }),
  unit: z.string({ message: "Veuillez entrer votre unité" }),
  description: z.string({
    message: "Veuillez entrer une description de votre activité",
  }),
});

const validated = reactive({
  conditions: cabane.value.conditions.map(() => true),
});

const allGood = computed(() => validated.conditions.every((c: boolean) => c));

const state = reactive({
  email: "yo@yo.yo",
  firstname: "prenom",
  lastname: "nom",
  phone: "01234567899",
  unit: "bs",
  description: "yoyoyo",
  timePeriod: 0,
});

async function onSubmit(event: FormSubmitEvent<z.infer<typeof schema>>) {
  if (!range.value.start || !range.value.end) {
    alert("Veuillez choisir des dates sur le calendrier");
    return;
  }

  modalOpen.value = true;
}

const isLoading = ref(false);

async function onSend() {
  const data = {
    ...state,
    ...range.value,
  };

  if (cabane.value.timePeriods.length > 0) {
    // We got a specific time period defined
    const period = cabane.value.timePeriods.find(
      (p) => `${p.value}` === `${state.timePeriod}`
    );

    if (!period) {
      alert("Veuillez choisir une période de réservation");
      return;
    }

    // Patch time values
    data.start!.setHours(parseInt(period.hourStart));
    data.start!.setMinutes(parseInt(period.minuteStart));
    data.end!.setHours(parseInt(period.hourEnd));
    data.end!.setMinutes(parseInt(period.minuteEnd));
  }

  isLoading.value = true;

  await fetch(
    `${runtimeConfig.public.baseUrl}/api/v1/public/netBS/apmbs/cabane-reservation/${props.id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  modalOpen.value = false;
  isLoading.value = false;
  state.email = "";
  state.firstname = "";
  state.lastname = "";
  state.phone = "";
  state.unit = "";
  state.description = "";
  range.value.start = null;
  range.value.end = null;

  alert("Votre demande de réservation a bien été envoyée");
}
</script>
