<script setup>
import { ref } from "vue";

useHead({
  title: "La Cabane de la Moillettaz - APMBS",
});

useSeoMeta({
  title: "La Cabane de la Moillettaz - APMBS",
  ogTitle: "La Cabane de la Moillettaz - APMBS",
  description:
    "La Cabane de la Moillettaz est une cabane scoute située à La Moillettaz idéale pour des week-ends de patrouille",
  ogDescription:
    "La Cabane de la Moillettaz est une cabane scoute située à La Moillettaz idéale pour des week-ends de patrouille",
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
      alt="La Moillettaz"
      class="w-full h-96 object-cover lg:rounded-xl"
    />
    <h3
      class="text-3xl font-subtitle text-center text-slate-700 dark:text-slate-300 mt-10"
    >
      La Cabane de
    </h3>
    <h1 class="text-6xl font-title text-slate-900 text-center dark:text-white">
      La Moillettaz
    </h1>
    <div class="flex justify-center py-10 lg:pb-20">
      <p
        class="px-5 lg:px-0 text-xl text-slate-700 text-center lg:w-1/2 lg:mx-auto dark:text-slate-200"
      >
        La cabane de la Moillettaz offre un cadre idéal pour un week-end de
        patrouille ou toute autre activité scoute en petit groupe, à la lisière
        de la forêt et facilement accessible en transports en commun.<br />
        <span class="font-bold block mt-5"
          >Réservations uniquement pour les groupes scouts.</span
        >
      </p>
    </div>
    <div class="grid grid-cols-4 lg:py-10 gap-10">
      <div
        class="px-10 lg:px-0 col-span-4 lg:col-span-1 grid grid-cols-2 gap-10"
      >
        <div class="flex flex-col items-center">
          <Icon name="guidance:restaurant" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Cusinière équipée<br />
            Sans lave vaisselle
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:fire-hazard" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Chauffage et cuisinière à gaz avec four
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:hotel-room" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Dortoirs pour 15 sans coussins ni couvertures
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:bus" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Arrêt du car postal à cinq minutes à pieds
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:meeting-room" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Tables, chaises, canapés et vaisselle
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:unisex-restroom" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Toilettes et commodités à disposition
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:campfires" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Foyer à proximité pour faire du feu
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:park" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Forêt et ruisseau à proximité directe
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:high-voltage" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Electricité, eau courante et chauffage
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:luggage" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Dépose de matériel en voiture possible
          </p>
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10976.899607550404!2d6.6935525!3d46.5432377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2ea2b9ecd895%3A0x273aa8dee5d1344!2sCabane%20scoute%20de%20la%20Moillettaz!5e0!3m2!1sfr!2sus!4v1723618153558!5m2!1sfr!2sus"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full lg:flex-1 h-96 lg:h-auto rounded-xl"
          ></iframe>
        </div>
        <div class="lg:col-span-2 col-span-5">
          <p class="text-2xl font-medium text-slate-900 dark:text-slate-100">
            La cabane est située en bordure de forêt en bas d'un talus, entourée
            de pâturages et d'une forêt et à proximité d'un ruisseau.
          </p>
          <h4
            class="font-semibold text-slate-700 text-2xl mt-10 dark:text-slate-400"
          >
            En Voiture
          </h4>
          <p class="text-slate-800 text-lg mt-2 dark:text-slate-200">
            <span class="font-semibold">Il n'y a pas de parking</span> et aucun
            accès direct à la cabane, mais une route permet de s'en approcher.
            Il y a un petit parking privé sur lequel il est possible de se garer
            pour charger/décharger du matériel uniquement.
          </p>
          <h4
            class="font-semibold text-slate-700 text-2xl mt-10 dark:text-slate-400"
          >
            En Transports en Commun
          </h4>
          <p class="text-slate-800 text-lg mt-2 dark:text-slate-200">
            L'arrêt des lignes 360 et 365 « Ravessoud » du car postal se trouve
            à cinq minutes de la cabane au croisement du chemin avec la route
            d'Oron. Celui-ci part depuis la place de la Sallaz, accessible avec
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
              Réservations en week-end uniquement, tarif fixe de
              <b>200 CHF</b>. Le paiement se fait sur facture. Les frais de
              nettoyage et dégâts seront facturés <b>100 CHF</b> de l'heure en
              plus.<br /><br />
              <b>Pour les Membres de la Brigade de Sauvabelin</b><br />
              Rabais de 50% grâce au financement direct de la brigade. Un
              week-end coûte donc 100 CHF.
            </p>
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
    <Suspense>
      <ReservationBlock id="1" />
      <template #fallback>
        <ReservationLoader />
      </template>
    </Suspense>
  </div>
</template>
