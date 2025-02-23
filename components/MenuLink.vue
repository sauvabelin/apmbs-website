<script setup lang="ts">
const props = defineProps(["color", "label", "to", "href"]);
const colors = {
  slate: "dark:hover:text-slate-500 hover:text-slate-500 after:bg-slate-50",
  green:
    "dark:hover:text-emerald-500 hover:text-emerald-500 after:bg-emerald-500",
  amber: "dark:hover:text-amber-500 hover:text-amber-500 after:bg-amber-500",
  blue: "dark:hover:text-blue-500 hover:text-blue-500 after:bg-blue-500",
};

const cls = computed(
  () =>
    `inline-block dark:text-white transition-colors text-4xl text-slate-900 after:duration-500 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100 ${
      colors[props.color as keyof typeof colors]
    }`
);
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="cls">{{ label }}</NuxtLink>
  <a v-else :href="href" :class="cls">{{ label }}</a>
</template>
