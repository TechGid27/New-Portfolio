<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import { Autoplay, FreeMode } from 'swiper/modules'
import { computed } from 'vue'

const TECH_STACK = [
  { name: "Vue.js", icon: "https://svgl.app/library/vue.svg", Categories: "Front-end" },
  { name: "JavaScript", icon: "https://svgl.app/library/javascript.svg", Categories: "Front-end" },
  { name: "Laravel", icon: "https://svgl.app/library/laravel.svg", Categories: "Back-end" },
  { name: "PHP", icon: "https://svgl.app/library/php.svg", Categories: "Back-end" },
  { name: "Java", icon: "https://svgl.app/library/java.svg", Categories: "Back-end" },
  { name: "Spring Boot", icon: "https://svgl.app/library/spring.svg", Categories: "Back-end" },
  { name: "MySQL", icon: "https://svgl.app/library/mysql-wordmark-light.svg", Categories: "database" },
  { name: "MongoDb", icon: "https://svgl.app/library/mongodb-icon-dark.svg", Categories: "database" },
  { name: "Figma", icon: "https://svgl.app/library/figma.svg", Categories: "Design Application" },
  { name: "Canva", icon: "https://svgl.app/library/canva.svg", Categories: "Design Application" },
  { name: "Tailwind CSS", icon: "https://svgl.app/library/tailwindcss.svg", Categories: "Front-end" },
  { name: "Firebase", icon: "https://svgl.app/library/firebase.svg", Categories: "database" },
  { name: "Wordpress", icon: "https://svgl.app/library/wordpress.svg", Categories: "Back-end" },
  { name: "N8n", icon: "https://svgl.app/library/n8n.svg", Categories: "AI automation" },
  { name: "bootstrap", icon: "https://svgl.app/library/bootstrap.svg", Categories: "Front-end" },
  { name: "html5", icon: "https://svgl.app/library/html5.svg", Categories: "Front-end" },
  { name: "css3", icon: "https://svgl.app/library/css.svg", Categories: "Front-end" }
];

const frontEndCount = computed(() =>
  TECH_STACK.filter(tech => tech.Categories === 'Front-end').length
)
const backendCount = computed(() =>
  TECH_STACK.filter(tech => tech.Categories === 'Back-end').length
)

const databaseCount = computed(() =>
  TECH_STACK.filter(tech => tech.Categories === 'database').length
)

const DesignCount = computed(() =>
  TECH_STACK.filter(tech => tech.Categories === 'Design Application').length
)
const aiCount = computed(() =>
  TECH_STACK.filter(tech => tech.Categories === 'AI automation').length
)



const modules = [Autoplay, FreeMode]


</script>

<template>
  <div id="skills"
    class="bg-[url('/assets/background-luxury-minimalist-gradient-style-design_698780-702.jpg')] bg-cover bg-center brightness-95 min-h-screen py-5">
    <h2 class="text-2xl font-bold uppercase tracking-widest text-gray-800 text-center pt-20">Skills</h2>

    <div class="mt-25">
      <Swiper :slides-per-view="2" :space-between="10" :loop="true" :speed="3500" :allow-touch-move="false" :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }" :breakpoints="{
          350: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }" :modules="modules" class="smoothSwiper">
        <SwiperSlide v-for="techs in TECH_STACK" :key="techs.name"
          class="group flex items-center justify-items-center transition-all duration-500 transform">
          <img :src="techs.icon" :alt="techs.name"
            class="md:w-20 md:h-30 w-20 h-20 transition-transform group-hover:scale-110 group-hover:rotate-6 group-hover:cursor-pointer" />
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="container mx-auto px-10 mt-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full place-items-center">
        <div class="h-52 w-full bg-gray-900 rounded-3xl p-5 text-white">
          <h2 class="pb-0 font-bold text-2xl">Front end Development</h2>
          <h4 class="text-gray-400 font-lighter"> {{ frontEndCount }} skills</h4>
          <hr class="mt-2">
          <div class="flex gap-5 mt-15">
            <div v-for="techs in TECH_STACK.filter(t => t.Categories === 'Front-end')" :key="techs.name"
              class="group transition-all duration-500 transform">
              <img :src="techs.icon" :alt="techs.name"
                class="w-10 h-10 transition-transform group-hover:scale-110 group-hover:rotate-6 group-hover:cursor-pointer">
            </div>
          </div>
        </div>
        <div class="h-52 w-full bg-gray-900 rounded-3xl p-5 text-white">
          <h2 class="pb-0 font-bold text-2xl">Back end Development</h2>
          <h4 class="text-gray-400 font-lighter"> {{ backendCount }} skills</h4>
          <hr class="mt-2">
          <div class="flex gap-5 mt-15">
            <div v-for="techs in TECH_STACK.filter(t => t.Categories === 'Back-end')" :key="techs.name"
              class="group transition-all duration-500 transform">
              <img :src="techs.icon" :alt="techs.name"
                class="w-10 h-10 transition-transform group-hover:scale-110 group-hover:rotate-6 group-hover:cursor-pointer">
            </div>
          </div>
        </div>
        <div class="h-52 w-full bg-gray-900 rounded-3xl p-5 text-white">
          <h2 class="pb-0 font-bold text-2xl">Database Development</h2>
          <h4 class="text-gray-400 font-lighter"> {{ databaseCount }} skills</h4>
          <hr class="mt-2">
          <div class="flex gap-5 mt-15">
            <div v-for="techs in TECH_STACK.filter(t => t.Categories === 'database')" :key="techs.name"
              class="group transition-all duration-500 transform">
              <img :src="techs.icon" :alt="techs.name"
                class="w-10 h-10 transition-transform group-hover:scale-110 group-hover:rotate-6 group-hover:cursor-pointer">
            </div>
          </div>
        </div>
        <div class="h-52 w-full bg-gray-900 rounded-3xl p-5 text-white">
          <h2 class="pb-0 font-bold text-2xl">Design Development</h2>
          <h4 class="text-gray-400 font-lighter"> {{ DesignCount }} skills</h4>
          <hr class="mt-2">
          <div class="flex gap-5 mt-15">
            <div v-for="techs in TECH_STACK.filter(t => t.Categories === 'Design Application')" :key="techs.name"
              class="group transition-all duration-500 transform">
              <img :src="techs.icon" :alt="techs.name"
                class="w-10 h-10 transition-transform group-hover:scale-110 group-hover:rotate-6 group-hover:cursor-pointer">
            </div>
          </div>
        </div>
        <div class="h-52 w-full bg-gray-900 rounded-3xl p-5 text-white">
          <h2 class="pb-0 font-bold text-2xl">Automation Development</h2>
          <h4 class="text-gray-400 font-lighter"> {{ aiCount }} skills</h4>
          <hr class="mt-2">
          <div class="flex gap-5 mt-15">
            <div v-for="techs in TECH_STACK.filter(t => t.Categories === 'AI automation')" :key="techs.name"
              class="group transition-all duration-500 transform">
              <img :src="techs.icon" :alt="techs.name"
                class="w-10 h-10 transition-transform group-hover:scale-110 group-hover:rotate-6 group-hover:cursor-pointer">
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>
