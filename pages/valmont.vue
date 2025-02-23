<script setup>
import { ref } from "vue";

useHead({
  title: "Le Pavillon de Valmont - APMBS",
});

useSeoMeta({
  title: "Le Pavillon de Valmont - APMBS",
  ogTitle: "Le Pavillon de Valmont - APMBS",
  description:
    "Le Pavillon de Valmont, idéalement situé en ville de Lausanne, offre tout le nécessaire pour des séances de troupes ou autre activités avec notamment une cuisine et une grande salle chauffée de 50 places assises",
  ogDescription:
    "Le Pavillon de Valmont, idéalement situé en ville de Lausanne, offre tout le nécessaire pour des séances de troupes ou autre activités avec notamment une cuisine et une grande salle chauffée de 50 places assises",
});

const pictures = ref([
  "https://images.unsplash.com/photo-1723015614356-4d41137469fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1721136876543-d747e1aa48b7?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723082053696-f94b182d4693?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723084701888-658cf3b8f515?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1722925541914-ae7cf154d606?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1722486110902-3e1a6e2600e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1723049235305-65395182241f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]);
</script>

<template>
  <div class="mx-auto lg:py-10 container">
    <img
      src="https://plus.unsplash.com/premium_photo-1673374235916-79c1a9016ce0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="La Tuile"
      class="w-full h-96 object-cover lg:rounded-xl"
    />
    <h3
      class="text-3xl font-subtitle text-center text-slate-700 dark:text-slate-300 mt-10"
    >
      Le Pavillon de
    </h3>
    <h1 class="text-6xl font-title text-slate-900 text-center dark:text-white">
      Valmont
    </h1>
    <div class="flex justify-center py-10 lg:pb-20">
      <p
        class="px-5 lg:px-0 text-xl text-slate-700 text-center lg:w-1/2 lg:mx-auto dark:text-slate-200"
      >
        Le Pavillon de Valmont, idéalement situé en ville de Lausanne, offre
        tout le nécessaire pour des séances de troupes ou autre activités avec
        notamment une cuisine et une grande salle chauffée de 50 places assises.
        <br />
        <span class="font-bold block mt-5">Location possible hors scouts</span>
      </p>
    </div>
    <div class="grid grid-cols-4 lg:py-10 gap-10">
      <div class="px-10 lg:px-0 col-span-4 lg:col-span-1">
        <div class="text-sm text-slate-800 dark:text-slate-200">
          Le Pavillon est parfaitement adapté pour les séances avec grands
          groupes, comme les soirées des parents, séances de troupes etc.
        </div>
        <div
          class="p-3 border border-solid bg-amber-100 border-amber-200 dark:bg-amber-900 dark:border-amber-700 rounded text-sm my-10"
        >
          Il n'est pas possible d'y passer la nuit. Réservation au plus tard
          jusqu'à 23h.
        </div>
        <div class="grid grid-cols-2 gap-10">
          <div class="flex flex-col items-center">
            <Icon name="guidance:restaurant" class="text-4xl" />
            <p
              class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
            >
              Cuisine équipée<br />
              avec un lave vaisselle
            </p>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="guidance:bus" class="text-4xl" />
            <p
              class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
            >
              Arrêt de bus Valmont à deux minutes
            </p>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="guidance:meeting-room" class="text-4xl" />
            <p
              class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
            >
              Salle de 50 places avec tables et chaises
            </p>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="guidance:unisex-restroom" class="text-4xl" />
            <p
              class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
            >
              Sanitaires et commodités à disposition
            </p>
          </div>
          <div class="flex flex-col items-center">
            <Icon name="guidance:park" class="text-4xl" />
            <p
              class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
            >
              En forêt au coeur de Lausanne
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-4 lg:col-span-3 px-5 lg:px-0">
        <PictureCarousel :pictures="pictures" />
      </div>
    </div>
    <div
      class="p-5 lg:p-10 mt-5 lg:mt-20 bg-slate-100 dark:bg-blue-500/10 lg:rounded-t-xl"
    >
      <div class="grid grid-cols-5 gap-10">
        <div class="lg:col-span-3 col-span-5 relative flex flex-col">
          <h3
            class="text-5xl font-medium font-subtitle text-slate-700 mb-10 dark:text-slate-200"
          >
            Informations Pratiques
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.922384768282!2d6.61781237669876!3d46.54922216039375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c31f1693e545b%3A0xbc609b2cafdf6e6a!2sCabane%20scoute%20de%20la%20Tuile!5e0!3m2!1sfr!2sch!4v1723641115231!5m2!1sfr!2sch"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full lg:flex-1 h-96 lg:h-auto rounded-xl"
          ></iframe>
        </div>
        <div class="lg:col-span-2 col-span-5">
          <p class="text-2xl font-medium text-slate-900 dark:text-slate-100">
            Le Pavillon est idéalement situé à proximité de l'arrêt de bus
            Valmont et du P+R Lausanne Valmont.
          </p>
          <h4
            class="font-semibold text-slate-700 text-2xl mt-10 dark:text-slate-400"
          >
            En Voiture
          </h4>
          <p class="text-slate-800 text-lg mt-2 dark:text-slate-200">
            Il n'y a pas de parking au Pavillon, mais il est possible de se
            garer sur les zones bleues ou blanches sur la route d'Oron, à
            proximité. L'accès direct est néanmoins possible pour
            charger/décharger du matériel, mais nécessite une clé KABA 5000 pour
            ouvrir la barrière.
          </p>
          <h4
            class="font-semibold text-slate-700 text-2xl mt-10 dark:text-slate-400"
          >
            En Transports en Commun
          </h4>
          <p class="text-slate-800 text-lg mt-2 dark:text-slate-200">
            L'arrêt TL « Valmont » se situe à 2 minutes à pieds du Pavillon.
            Plusieurs bus desservent cet arrêt depuis la Sallaz, accessible avec
            le métro M2.
          </p>
        </div>
      </div>
    </div>
    <div class="bg-slate-100 dark:bg-blue-500/10">
      <div class="p-5 lg:p-10 dark:bg-yellow-800/60 bg-amber-200">
        <div class="grid grid-cols-2 gap-10">
          <div class="lg:col-span-1 col-span-2">
            <h3
              class="text-5xl font-medium font-subtitle text-slate-700 mb-10 dark:text-slate-200"
            >
              Tarifs
            </h3>
            <p class="text-slate-800 text-lg mt-2 dark:text-slate-200">
              <b
                >Les samedis sont réservés exclusivement aux activités de la
                Brigade de Sauvabelin et ne peuvent donc pas être réservés à
                d'autres fins à l'avance.</b
              ><br />
              Les dégâts ou nettoyages éventuels seront facturés en sus, Fr.
              100.- par heure.<br />
            </p>
            <ul
              class="list-disc list-inside text-slate-800 text-lg mt-2 dark:text-slate-200"
            >
              <li>Matinée, après-midi ou soirée: Fr. 50.-</li>
              <li>Journée complète: Fr. 150.-</li>
              <li>Activités BS Gratuit</li>
            </ul>
          </div>
          <div class="lg:col-span-1 col-span-2">
            <h3
              class="text-5xl font-medium font-subtitle text-slate-700 mb-10 dark:text-slate-200"
            >
              Conditions d'Annulation
            </h3>
            <p class="text-slate-800 text-lg mt-2 dark:text-slate-200">
              L'annulation doit se faire en réponse au mail de confirmation de
              location uniquement.<br />
              Les frais d'annulations sont les suivants:
            </p>
            <ul
              class="list-disc list-inside text-slate-800 text-lg mt-2 dark:text-slate-200"
            >
              <li>jusqu'à 7 jours avant la location: sans frais</li>
              <li>jusqu'à 3 jours avant la location: 50% du montant est dû</li>
              <li>
                moins de 3 jours avant la location: 100% du montant est dû
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ReservationExternal href="https://apmbs.sauvabelin.ch/valmont" />
  </div>
</template>
