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
          <div class="relative">
            <client-only>
              <VDatePicker
                class="border border-slate-300 border-solid w-full dark:border-slate-700"
                v-model.range="range"
                expanded
                is24hr
                is-dark="system"
                :disabled-dates="disabledDates"
                :rules="cabane.availabilityRules"
                :attributes="monthlyAttributes"
                :mode="
                  (cabane.timePeriods || []).length > 0 ? undefined : 'dateTime'
                "
                :columns="columns"
                @update:pages="onPageChange"
            /></client-only>
            <div
              v-if="calendarLoading"
              class="absolute top-0 left-0 w-full h-full p-1 z-10"
            >
              <div
                class="rounded-xl backdrop-blur w-full h-full bg-white/70 dark:bg-slate-900/70 flex items-center justify-center"
              >
                <Spinner />
              </div>
            </div>
          </div>
          <UFormGroup
            label="Période de réservation"
            name="timePeriod"
            v-if="(cabane.timePeriods || []).length > 0"
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
        <div
          v-if="error"
          class="mt-3 dark:bg-red-800/50 border-2 border-solid dark:border-red-800 p-4 bg-red-200 border-red-500 text-slate-800 dark:text-white rounded"
        >
          <p class="font-semibold">
            Une erreur est survenue, veuillez réessayer plus tard ou nous
            contacter par e-mail.
          </p>
          <p class="text-xs mt-2 max-h-[200px] overflow-auto opacity-70">
            {{ error }}
          </p>
        </div>
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
import parseGoogleEventDates from "~/utils/parseGoogleEventDates";
import { add, differenceInDays } from "date-fns";

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
    const val = JSON.parse(value.replace("\r", "").replace("\n", ""));
    if (!val) {
      return undefined;
    }

    return val;
  } catch {
    return undefined;
  }
}

/* Calendar configuration */
const cabane = ref<{
  nom: string;
  availabilityRules: object | undefined;
  prices: string | undefined;
  disabledDates: Array<object> | undefined;
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
      const availabilityRulesParsed = tryParse(data.availabilityRules);
      const availabilityRules =
        availabilityRulesParsed && availabilityRulesParsed.length > 0
          ? availabilityRulesParsed
          : undefined;
      return {
        ...data,
        disabledDates: tryParse(data.disabledDates),
        availabilityRules,
      };
    })
  )
);

/* Conflicts attributes */
const monthlyAttributes = ref<Array<object>>([]);
const monthlyDisabledDates = ref<Array<Date>>([]);
const disabledDates = computed(() => [
  ...monthlyDisabledDates.value,
  ...(cabane.value.disabledDates || []),
]);

const calendarLoading = ref(false);
const previousPages = ref<{ month: number; year: number } | null>(null);

function onPageChange(pages: Array<{ month: number; year: number }>) {
  if (!previousPages.value) {
    previousPages.value = pages[0];
  } else if (
    previousPages.value.month === pages[0].month &&
    previousPages.value.year === pages[0].year
  ) {
    return;
  }

  previousPages.value = pages[0];
  const intervalStart = new Date(pages[0].year, pages[0].month - 1, 1);
  const intervalEnd = new Date(pages[1].year, pages[1].month, 1);

  calendarLoading.value = true;

  type ReceivedEvent = {
    id: string;
    start: string;
    end: string;
    status: string;
    blockStartDay?: boolean;
    blockEndDay?: boolean;
  };

  fetch(
    `${
      runtimeConfig.public.baseUrl
    }/api/v1/public/netBS/apmbs/cabane-monthly-events/${
      props.id
    }${`?start=${intervalStart.toISOString()}&end=${intervalEnd.toISOString()}`}`
  ).then((res) =>
    res.json().then((data: Array<ReceivedEvent>) => {
      let nextAttributes: Array<object> = [];
      const nextDisabledDates: Array<Date> = [];

      for (const range of data) {
        const { isFullDay, start, end } = parseGoogleEventDates(
          range.start,
          range.end
        );

        // Build disabledDates array
        const nextStart = add(start, { days: 1 });
        while (differenceInDays(end, nextStart) > 0) {
          nextDisabledDates.push(new Date(nextStart.getTime()));
          nextStart.setDate(nextStart.getDate() + 1);
        }

        if (!!range.blockStartDay) {
          nextDisabledDates.push(new Date(start.getTime()));
        }

        if (!!range.blockEndDay) {
          nextDisabledDates.push(new Date(end.getTime()));
        }

        nextAttributes = [
          ...nextAttributes,
          ...eventToAttribute(start, end, isFullDay),
        ];
      }

      monthlyAttributes.value = nextAttributes;
      monthlyDisabledDates.value = nextDisabledDates;
      calendarLoading.value = false;
    })
  );
}

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
  conditions: cabane.value.conditions.map(() => false),
});

const allGood = computed(() => validated.conditions.every((c: boolean) => c));

const state = reactive({
  email: undefined,
  firstname: undefined,
  lastname: undefined,
  phone: undefined,
  unit: undefined,
  description: undefined,
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

function dateToLocalISO(date: Date) {
  const off = date.getTimezoneOffset();
  const absoff = Math.abs(off);
  return (
    new Date(date.getTime() - off * 60 * 1000).toISOString().substr(0, 23) +
    (off > 0 ? "-" : "+") +
    Math.floor(absoff / 60)
      .toFixed(0)
      .padStart(2, "0") +
    ":" +
    (absoff % 60).toString().padStart(2, "0")
  );
}

const error = ref<string | null>(null);

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
  const payload = {
    ...data,
    start: dateToLocalISO(data.start!),
    end: dateToLocalISO(data.end!),
  };

  const res = await fetch(
    `${runtimeConfig.public.baseUrl}/api/v1/public/netBS/apmbs/cabane-reservation/${props.id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    error.value = text;
    isLoading.value = false;
    return;
  }

  modalOpen.value = false;
  isLoading.value = false;
  state.email = undefined;
  state.firstname = undefined;
  state.lastname = undefined;
  state.phone = undefined;
  state.unit = undefined;
  state.description = undefined;
  range.value.start = null;
  range.value.end = null;

  alert("Votre demande de réservation a bien été envoyée");
}
</script>
