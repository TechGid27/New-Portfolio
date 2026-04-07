<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import { Autoplay, FreeMode } from 'swiper/modules'
import { computed , ref, onMounted } from 'vue'

const TECH_STACK = [
  { name: "Vue.js", icon: "https://svgl.app/library/vue.svg", Categories: "Front-end" },
  { name: "Three.js", icon: "https://svgl.app/library/threejs-light.svg", Categories: "Front-end" },
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
  { name: "css3", icon: "https://svgl.app/library/css.svg", Categories: "Front-end" },
  { name: "Kotlin", icon: "https://svgl.app/library/kotlin.svg", Categories: "Back-end" },
  { name: "SQL Server Express", icon: "https://svgl.app/library/sql-server.svg", Categories: "database" },
  { name: "MS Access", icon: "https://svgl.app/library/microsoft-access.svg", Categories: "database" },

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


const skillsContainer = ref(null)

onMounted(() => {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the card is visible
    rootMargin: '0px 0px -50px 0px' // Slight offset so it feels more natural
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        // We stop observing once it's shown to keep the "reveal" permanent
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Find all cards inside the container and observe them
  if (skillsContainer.value) {
    const cards = skillsContainer.value.querySelectorAll('.skill-card-animate')
    cards.forEach((card) => observer.observe(card))
  }
})


</script>

<template>
  <div id="skills"
    class="bg-[url('/assets/background-luxury-minimalist-gradient-style-design_698780-702.jpg')] bg-cover bg-center brightness-95 min-h-screen py-20">
   <div v-reveal class="text-center mb-16 space-y-3">
      <span class="text-xs md:text-sm font-black text-gray-900 uppercase tracking-[0.5em] block mb-2">
        My Expertise
      </span>

      <h2 class="text-4xl md:text-6xl font-black text-black tracking-tighter transition-all hover:tracking-normal duration-700 cursor-default">
        Skills
      </h2>

      <div class="flex justify-center pt-4">
        <div class="h-px w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </div>
    </div>
    <div class="mt-25">
      <Swiper 
        :slides-per-view="3" 
        :space-between="30" 
        :loop="true" 
        :speed="5000" 
        :autoplay="{ delay: 0, disableOnInteraction: false }"
        :breakpoints="{
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 8 },
        }" 
        :modules="modules" 
        class="tech-slider-smooth"
      >
        <SwiperSlide v-for="techs in TECH_STACK" :key="techs.name" class="flex items-center justify-center">
          <div class="group relative p-4 transition-all duration-500">
            <img :src="techs.icon" :alt="techs.name" 
              class="w-16 h-16 md:w-20 md:h-20 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-125 group-hover:-rotate-12" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- <div class="container mx-auto px-10 mt-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full place-items-center">
        <div class="min-h-52 w-full bg-gray-900 rounded-3xl p-5 text-white">
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
        <div class="min-h-52 w-full bg-gray-900 rounded-3xl p-5 text-white">
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
        <div class="min-h-52 w-full bg-gray-900 rounded-3xl p-5 text-white">
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
        <div class="min-h-52 w-full bg-gray-900 rounded-3xl p-5 text-white">
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
        <div class="min-h-52 w-full bg-gray-900 rounded-3xl p-5 text-white">
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
    </div> -->
<div class="container mx-auto px-6 md:px-10 mt-10" ref="skillsContainer">
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-stretch">
    
    <div v-for="(cat, index) in [
      { label: 'Front end Development', count: frontEndCount, filter: 'Front-end' },
      { label: 'Back end Development', count: backendCount, filter: 'Back-end' },
      { label: 'Database Development', count: databaseCount, filter: 'database' },
      { label: 'Design Development', count: DesignCount, filter: 'Design Application' },
      { label: 'Automation Development', count: aiCount, filter: 'AI automation' }
    ]" 
    :key="cat.label"
    class="skill-card-animate group relative min-h-[220px] w-full bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-700 hover:-translate-y-2 hover:bg-white/60 hover:shadow-2xl"
    :style="{ transitionDelay: `${index * 150}ms` }"
    >
      <div class="absolute -right-4 -top-4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <div class="relative z-10 flex justify-between items-start mb-6">
        <div>
          <h2 class="text-2xl font-black tracking-tighter text-gray-900 leading-tight">
            {{ cat.label.split(' ')[0] }}
            <span class="block text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1">Development</span>
          </h2>
        </div>
        <div class="bg-white/50 px-3 py-1 rounded-full border border-white/80 shadow-sm">
          <span class="text-[11px] font-bold text-gray-500 italic">{{ cat.count }} skills</span>
        </div>
      </div>

      <div class="h-[1px] w-full bg-gradient-to-r from-gray-200 via-transparent to-transparent mb-8"></div>

      <div class="relative z-10 flex flex-wrap gap-5">
        <div v-for="techs in TECH_STACK.filter(t => t.Categories === cat.filter)" :key="techs.name"
          class="group/icon relative p-3 rounded-2xl bg-white/40 border border-white/50 shadow-sm transition-all duration-500 hover:bg-white hover:scale-110 hover:shadow-md">
          
          <img :src="techs.icon" :alt="techs.name"
            class="w-8 h-8 object-contain grayscale-[0.5] group-hover/icon:grayscale-0 transition-all">
          
          <span class="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-[10px] text-white rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-bold">
            {{ techs.name }}
          </span>
        </div>
      </div>
    </div>

  </div>
</div>

  </div>

</template>
