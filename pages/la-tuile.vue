<script setup>
import { ref } from "vue";

useHead({
  title: "La Cabane de la Tuile - APMBS",
});

useSeoMeta({
  title: "La Cabane de la Tuile - APMBS",
  ogTitle: "La Cabane de la Tuile - APMBS",
  description:
    "La Cabane de la Tuile est une cabane scoute située à Lausanne, idéale pour des séances de troupe ou autre activités avec notamment une grande salle chauffée de 40 places assises",
  ogDescription:
    "La Cabane de la Tuile est une cabane scoute située à Lausanne, idéale pour des séances de troupe ou autre activités avec notamment une grande salle chauffée de 40 places assises",
});

const pictures = ref([
  "/tuile/tuile1.webp",
  "/tuile/tuile2.webp",
  "/tuile/tuile3.webp",
  "/tuile/tuile4.webp",
]);
</script>

<template>
  <div class="mx-auto lg:py-10 container">
    <img
      src="/tuile/banner.webp"
      alt="La Tuile"
      class="w-full h-96 object-cover lg:rounded-xl"
    />
    <h3
      class="text-3xl font-subtitle text-center text-slate-700 dark:text-slate-300 mt-10"
    >
      La Cabane de
    </h3>
    <h1 class="text-6xl font-title text-slate-900 text-center dark:text-white">
      La Tuile
    </h1>
    <div class="flex justify-center py-10 lg:pb-20">
      <p
        class="px-5 lg:px-0 text-xl text-slate-700 text-center lg:w-1/2 lg:mx-auto dark:text-slate-200"
      >
        L'APMBS est heureuse de mettre la cabane de la Tuile à disposition des
        activités scoutes. Celle-ci est notamment équipée d'une grande salle
        chauffée de 40 places idéale pour des séances de troupe.<br />
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
            avec un lave vaisselle
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:fire-hazard" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Chauffage électrique et poêle à pelets
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:bus" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Arrêt Blecherette à trente minutes à pieds
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:meeting-room" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Salle de 40 places avec tables et chaises
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:unisex-restroom" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Toilettes (pas de douches) à disposition
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
            Electricité et eau courante
          </p>
        </div>
        <div class="flex flex-col items-center">
          <Icon name="guidance:luggage" class="text-4xl" />
          <p
            class="font-subtitle text-lg text-slate-800 text-center dark:text-slate-200"
          >
            Parking disponible durant la location
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7540.089309671113!2d6.613687066014554!3d46.54889655360876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c31f1693e545b%3A0xbc609b2cafdf6e6a!2sCabane%20scoute%20de%20la%20Tuile!5e0!3m2!1sfr!2sch!4v1740398900538!5m2!1sfr!2sch"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full lg:flex-1 h-96 lg:h-auto rounded-xl"
          ></iframe>
        </div>
        <div class="lg:col-span-2 col-span-5">
          <p class="text-2xl font-medium text-slate-900 dark:text-slate-100">
            La cabane est située en bordure d'une petite forêt, de pâturages et
            à proximité d'un ruisseau, accessible en transports publics et en
            voiture.
          </p>
          <h4
            class="font-semibold text-slate-700 text-2xl mt-10 dark:text-slate-400"
          >
            En Voiture
          </h4>
          <p class="text-slate-800 text-lg mt-2 dark:text-slate-200">
            L'accès à la Cabane se fait depuis la Route de la Blécherette par un
            chemin agricole. Il est possible de stationner devant la Cabane
            durant son utilisation.
          </p>
          <h4
            class="font-semibold text-slate-700 text-2xl mt-10 dark:text-slate-400"
          >
            En Transports en Commun
          </h4>
          <p class="text-slate-800 text-lg mt-2 dark:text-slate-200">
            L'arrêt TL « Blécherette » se situe à 15 minutes à pieds de la
            Cabane. Les bus 1 et 21 desservent cet arrêt depuis le centre ville.
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
              La réservation se fait à la journée au tarif de <b>120 CHF</b> par
              jour. Le paiement se fait sur facture. Les frais de nettoyage et
              dégâts seront facturés <b>100 CHF</b> de l'heure en plus.<br /><br />
              <b>Pour les Membres de la Brigade de Sauvabelin</b><br />
              Pour la BS, si la location s'étend sur un week-end, un jour est
              offert grâce au financement direct de la brigade. Un week-end
              coûte donc 120 CHF.
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

    <ReservationExternal href="https://apmbs.sauvabelin.ch/la-tuile" />
  </div>
</template>
