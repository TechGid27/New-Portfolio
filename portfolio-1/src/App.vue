<script setup>
import StContent from './components/LandingComponent.vue';
import HeaderCom from './components/HeaderCom.vue';

import AboutComponent from './components/AboutComponent.vue';
import UnderDeveloped from './components/UnderDeveloped.vue';

const TECH_STACK = [
  { name: "Vue.js", icon: "https://svgl.app/library/vue.svg" },
  { name: "JavaScript", icon: "https://svgl.app/library/javascript.svg" },
  { name: "Laravel", icon: "https://svgl.app/library/laravel.svg" },
  { name: "PHP", icon: "https://svgl.app/library/php.svg" },
  { name: "Java", icon: "https://svgl.app/library/java.svg" },
  { name: "Spring Boot", icon: "https://svgl.app/library/spring.svg" },
  { name: "MySQL", icon: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },
  { name: "Figma", icon: "https://svgl.app/library/figma.svg" },
  { name: "Tailwind CSS", icon: "https://svgl.app/library/tailwindcss.svg" },
  { name: "Firebase", icon: "https://svgl.app/library/firebase.svg"},
  { name: "Wordpress", icon: "https://svgl.app/library/wordpress.svg"},
  { name: "N8n", icon: "https://svgl.app/library/n8n.svg"},
  { name: "bootstrap", icon: "https://svgl.app/library/bootstrap.svg"},
  { name: "html5", icon: "https://svgl.app/library/html5.svg"},
  { name: "css3", icon: "https://svgl.app/library/css.svg"}
];


import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import { Autoplay, FreeMode } from 'swiper/modules'

const modules = [Autoplay, FreeMode]

</script>

<template>

  <div class="overflow-x-hidden scroll-smooth">
    <HeaderCom />
    <StContent />
    <AboutComponent />
    <div id="skills"
      class="bg-[url('/assets/background-luxury-minimalist-gradient-style-design_698780-702.jpg')] bg-cover bg-center brightness-95 h-screen">
      <h2 class="text-2xl font-bold uppercase tracking-widest text-gray-800 text-center pt-20">Skills</h2>

      <div class="mt-25">
        <Swiper :slides-per-view="2" :space-between="10" :loop="true" :speed="3500" :allow-touch-move="false" :autoplay="{
          delay: 0,
          disableOnInteraction: false,
        }" :breakpoints="{
            350: { slidesPerView: 3},
            640: { slidesPerView: 4},
            768: { slidesPerView: 5 },
            1024:{ slidesPerView: 6 },
          }" :modules="modules" class="smoothSwiper">
          <SwiperSlide v-for="techs in TECH_STACK" :key="techs.name" class="group flex items-center justify-items-center transition-all duration-500 transform">
            <img :src="techs.icon" :alt="techs.name" class="md:w-20 md:h-30 w-20 h-20 transition-transform group-hover:scale-110 group-hover:rotate-6 group-hover:cursor-pointer"  />
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <div>

        </div>
      </div>


    </div>
    <!-- <UnderDeveloped /> -->

  </div>




</template>

<style scoped></style>
