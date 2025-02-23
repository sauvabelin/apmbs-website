<template>
  <div
    class="flex mb-2 relative transition-opacity cursor-pointer"
    :class="{ 'opacity-30': model }"
    @click="model = !model"
  >
    <UCheckbox v-model="model" color="blue" />
    <p class="dark:text-white text-slate-800 ml-2 text-sm">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps(["text"]);
const model = defineModel(false);
</script>
