<script setup lang="ts">
import { ref } from "vue";
const modalOpen = ref(false);

onMounted(() => {
  const visited = localStorage.getItem("visited");
  if (visited) {
    const lastVisit = new Date(visited);
    const now = new Date();
    if (now.getTime() - lastVisit.getTime() < 1000 * 60 * 60 * 24) {
      return;
    }
  }

  modalOpen.value = true;
  localStorage.setItem("visited", new Date().toISOString());
});
</script>

<template>
  <div>
    <UModal v-model="modalOpen">
      <div class="p-5">
        <img
          src="https://plus.unsplash.com/premium_photo-1673374235916-79c1a9016ce0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="max-h-1/2 h-96 w-full object-cover rounded mb-5"
        />
        <h3
          class="text-3xl text-center font-medium font-subtitle text-slate-700 dark:text-slate-200 mb-5"
        >
          Nous cherchons des Intendants !
        </h3>
        <p class="text-slate-800 dark:text-slate-200">
          L'APMBS recherche des intendants pour la cabane de la Tuile (région
          autour de la Blecherette) et pour celle de la Moillettaz (la
          Claie-aux-Moines). Si vous êtes intéressé ou si vous connaissez
          quelqu'un qui pourrait l'être, n'hésitez pas à nous contacter à
          l'adresse suivante :
          <a href="mailto:apmbs@sauvabelin.ch">apmbs@sauvabelin.ch</a>.
          <br />
          <strong>Merci beaucoup !</strong>
        </p>
        <UButton
          color="blue"
          variant="solid"
          class="mt-5"
          size="sm"
          @click="modalOpen = false"
          label="Fermer"
        />
      </div>
    </UModal>
    <div class="grid grid-cols-1 lg:grid-cols-4 lg:h-screen lg:p-0.5">
      <div class="flex flex-col lg:h-full">
        <div
          class="flex-1 flex flex-col justify-center bg-slate-200 dark:lg:bg-slate-800 dark:bg-transparent p-10 lg:mb-0.5"
        >
          <h4
            class="font-subtitle text-2xl text-center text-slate-800 dark:text-slate-300"
          >
            Bienvenue sur le site de
          </h4>
          <h1
            class="font-title text-blue-900 dark:text-blue-100 text-6xl text-center pb-5"
          >
            APMBS
          </h1>
          <p
            class="text-slate-800 lg:text-justify text-center text-sm lg:text-base dark:text-slate-100"
          >
            Nous sommes une association bénévole de membres et d'anciens
            membres, de parents et d'autres personnes ayant eu un contact avec
            la Brigade de Sauvabelin, nous occupant de l'entretien et de la
            valorisation de ses cabanes scoutes.
          </p>
        </div>
        <div
          class="flex-1 flex flex-col justify-center bg-blue-300 dark:lg:bg-slate-700 dark:bg-transparent p-10"
        >
          <h1 class="font-title text-white text-4xl text-center pb-5">
            Nous Rejoindre
          </h1>
          <p
            class="lg:text-justify text-center text-sm lg:text-base text-slate-800 dark:text-slate-100"
          >
            L'association est ouverte à tous les anciens membres de la Brigade,
            aux parents motivés, aux copains et copines, etc. Nous nous occupons
            principalement de l'entretien des différentes cabanes et du stamm,
            des réservations mais également des plus grands projets de
            rénovation et d'aménagements.
          </p>
          <a
            href="mailto:apmbs@sauvabelin.ch"
            class="text-blue-700 dark:text-blue-200 text-xl text-subtitle font-bold text-center mt-5 hover:text-blue-900 transition-colors"
          >
            apmbs@sauvabelin.ch
          </a>
        </div>
      </div>
      <CabaneCard
        image="https://plus.unsplash.com/premium_photo-1673374235916-79c1a9016ce0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subtitle="La Cabane de"
        title="La Moillettaz"
        href="/la-moillettaz"
        icon="guidance:hotel-room-2"
      />
      <CabaneCard
        image="https://images.unsplash.com/photo-1540468348633-084ed9d348f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHV0fGVufDB8fDB8fHww"
        subtitle="Le Pavillon de"
        title="Valmont"
        href="/valmont"
        icon="guidance:meeting-point"
      />
      <CabaneCard
        image="https://images.unsplash.com/photo-1535373254831-0a72002623d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subtitle="La Cabane de"
        title="La Tuile"
        href="/la-tuile"
        icon="guidance:campfires"
      />
    </div>
  </div>
</template>
