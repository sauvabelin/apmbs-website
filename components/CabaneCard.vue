<script setup>
defineProps(["subtitle", "title", "image", "href", "icon"]);
</script>

<template>
  <NuxtLink
    :to="href"
    class="block h-96 lg:h-auto aspect-square relative group overflow-hidden cursor-pointer lg:ml-0.5"
  >
    <img
      :src="image"
      alt="image"
      class="absolute h-full w-full object-cover scale-110 group-hover:scale-100 transition-transform duration-500 ease-out"
    />
    <div
      class="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/90 to-transparent -translate-y-32 group-hover:translate-y-0 transition-all ease-in-out duration-300"
    ></div>
    <div
      class="absolute py-10 lg:py-0 lg:h-1/3 w-full flex flex-col items-center justify-center"
    >
      <Icon :name="icon" class="text-white text-4xl mb-5" />
      <p class="text-slate-300 font-subtitle text-2xl">{{ subtitle }}</p>
      <p
        class="text-white font-title text-5xl group-hover:scale-105 transition-transform duration-500 ease-out"
      >
        {{ title }}
      </p>
    </div>
  </NuxtLink>
</template>
