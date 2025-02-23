# Site web de l'APMBS

Le site est build en statique avec Nuxt et Vue 3 par une github actions à chaque commit sur `main` puis le code est automatiquement uploadé en FTP sur Hostpoint.

## Fonctionnement

La seule partie dynamique du site est le composant `ReservationBlock.vue` qui prend en props un unique `id` de cabane. C'est identifiant doit correspondre à celui de la cabane correspondante dans le netBS.

# Développer

1. Cloner le repository
2. Faire un `npm install`
3. Faire un `npm run dev` pour bosser (attention le site ira pomper dans le netBS de prod, pour changer l'URL, éditez le fichier `nuxt.config.js`)
4. Faire des modifs
5. Faire un `git push` pour trigger la github actions et mettre le site à jour
