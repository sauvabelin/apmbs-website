<template>
  <div>
    <div class="mb-5">
      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
      >
        <Slide v-for="(picture, index) in pictures" :key="index">
          <div
            class="carousel__item h-96 lg:h-[680px] w-full rounded-lg overflow-hidden"
          >
            <img
              :src="picture"
              alt="La Moillettaz"
              class="w-full h-full object-cover"
            />
          </div>
        </Slide>
      </Carousel>
    </div>

    <Carousel
      id="thumbnails"
      :items-to-show="columns"
      v-model="currentSlide"
      :wrap-around="true"
    >
      <Slide v-for="(picture, index) in pictures" :key="index">
        <div
          class="carousel__item lg:h-28 h-20 mx-2 w-52 rounded overflow-hidden"
          @click="slideTo(index)"
        >
          <img
            :src="picture"
            alt="La Moillettaz"
            class="w-full h-full object-cover hover:scale-110 transition-transform ease-out cursor-pointer"
          />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useScreens } from "vue-screen-utils";

defineProps(["pictures"]);

const { mapCurrent } = useScreens({
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
});

const columns = mapCurrent({ lg: 6 }, 4);

const currentSlide = ref(0);
function slideTo(index) {
  currentSlide.value = index;
}
</script>
