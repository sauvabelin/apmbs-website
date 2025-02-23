<template>
  <div>
    <div class="flex">
      <div class="w-60 hidden lg:block"></div>
      <div class="w-60 hidden h-screen lg:flex flex-col fixed">
        <div class="flex flex-col items-center px-5 pt-10">
          <img src="~/assets/logo.png" alt="logo" class="w-20 dark:hidden" />
          <img
            src="~/assets/logo_white.png"
            alt="logo"
            class="w-20 dark:block hidden"
          />
          <p
            class="text-center font-subtitle text-lg font-medium text-slate-800 mt-5 dark:text-slate-200"
          >
            L'Association pour la Maison de la Brigade de Sauvabelin
          </p>
        </div>
        <div
          class="font-subtitle flex-1 flex flex-col items-center gap-5 mt-10"
        >
          <div>
            <MenuLink to="/" label="Accueil" color="slate" />
          </div>
          <div>
            <MenuLink to="/la-moillettaz" label="La Moillettaz" color="green" />
          </div>
          <div>
            <MenuLink to="/la-tuile" label="La Tuile" color="amber" />
          </div>
          <div>
            <MenuLink to="/valmont" label="Valmont" color="blue" />
            <!--
            <NuxtLink
              to="/valmont"
              class="inline-block dark:text-white transition-colors text-4xl text-slate-900 after:duration-500 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100"
              >Valmont</NuxtLink
            >
          --></div>
        </div>
        <div
          class="p-5 text-center text-sm text-slate-600 font-subtitle dark:text-slate-400"
        >
          Copyright &copy; {{ new Date().getFullYear() }}<br />
          Brigade de Sauvabelin
        </div>
      </div>
      <div class="flex-1">
        <div class="lg:hidden">
          <div
            class="flex justify-between p-3 bg-white dark:bg-slate-800 relative z-10"
          >
            <div class="flex items-center">
              <img
                src="~/assets/logo.png"
                alt="logo"
                class="dark:hidden w-10"
              />
              <img
                src="~/assets/logo_white.png"
                alt="logo"
                class="w-10 dark:block hidden"
              />
              <p class="text-sm ml-2">
                <span class="text-slate-700 dark:text-white/80"
                  >Association pour la Maison de la</span
                >
                <br /><span class="font-semibold">Brigade de Sauvabelin</span>
              </p>
            </div>
            <div class="flex items-center">
              <UButton
                color="blue"
                variant="solid"
                size="sm"
                @click="menuOpen = !menuOpen"
                >Menu</UButton
              >
            </div>
          </div>
          <div
            class="absolute dark:bg-slate-800 bg-white w-full p-3 border-t border-solid border-slate-200 dark:border-slate-700 flex flex-col gap-3 transition-all duration-500 ease-out z-0"
            :class="{
              'translate-y-0 opacity-100': menuOpen,
              '-translate-y-96 opacity-0': !menuOpen,
            }"
          >
            <NuxtLink to="/" class="dark:text-slate-200 text-slate-800 text-sm"
              >Accueil</NuxtLink
            >
            <NuxtLink
              to="/la-moillettaz"
              class="dark:text-slate-200 text-slate-800 text-sm"
              >La Moillettaz</NuxtLink
            >
            <NuxtLink
              to="/la-tuile"
              class="dark:text-slate-200 text-slate-800 text-sm"
              >La Tuile</NuxtLink
            >
            <NuxtLink
              to="/valmont"
              class="dark:text-slate-200 text-slate-800 text-sm"
              >Valmont</NuxtLink
            >
          </div>
        </div>
        <NuxtPage />
        <div class="lg:hidden p-5">
          <div
            class="p-5 text-center text-sm text-slate-600 font-subtitle dark:text-slate-400"
          >
            Copyright &copy; {{ new Date().getFullYear() }}<br />
            Brigade de Sauvabelin
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuOpen = ref(false);
const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  }
);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
