<script setup lang="ts">
defineProps(["href"]);
</script>

<template>
  <div class="p-5 lg:p-10 bg-slate-200 dark:bg-blue-800/10 rounded-b-xl">
    <h3
      class="text-5xl font-medium font-subtitle text-slate-700 mb-5 dark:text-slate-200"
    >
      Réservation
    </h3>
    <p class="text-slate-800 text-lg mt-2 dark:text-slate-200">
      Les réservations pour cette cabane se font sur l'ancienne plateforme,
      accessible en cliquant ici.
    </p>
    <UButton
      color="blue"
      variant="solid"
      class="mt-5"
      size="xl"
      :to="href"
      target="_blank"
      label="Réserver cette Cabane"
    />
  </div>
</template>
