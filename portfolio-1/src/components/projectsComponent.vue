<script setup>
import { ref, watch } from 'vue'

const project = [
  {
    title: "MCS Services",
    image: "/assets/mcsservice.png",
    url: "https://mcsservices.org",
    frontEnd: "HTML, CSS Bootstrap",
    backEnd: "Wordpress",
    description: "Athletes and Models Agency is about showing the human side of Social Media Influencers by providing them with a Social Media Crowdfunding Platform. "
  },
  {
    title: "Cloud Design Build",
    image: "/assets/cloud.png",
    url: "https://clouddesignbuild.com",
    frontEnd: "HTML, CSS Bootstrap",
    backEnd: "Wordpress",
    description: "Cloud Design Build serves construction needs by providing quality, innovative, and caring solutions for homes and businesses."
  },
  {
    title: "Lost and Found",
    image: "/assets/screencapture-127-0-0-1-8000-login-2026-02-04-22_18_37.png",
    url: "Upcoming",
    frontEnd: "HTML(Blade), Tailwind CSS",
    backEnd: "Laravel",
    description: "Developing a Lost and Found System for ACLC Mandaue College that allows users to report, view, and claim lost items online with proper authentication."
  },
  {
    title: "Craft Coffee",
    url : "Upcoming",
    image: "/assets/craftcoffee.jpg",
    frontEnd: "XML",
    backEnd: "Kotlin",
    description: "This app is a coffee shop app that allows users to place orders and track their order status. It also allows users to view the menu and place orders."
  }
]

const selectedProject = ref(null)
const isOpen = ref(false)

const openProject = (p) => {
  selectedProject.value = p
  isOpen.value = true
}

const closeProject = () => {
  isOpen.value = false
}

// Lock scroll when modal is open
watch(isOpen, (val) => {
  if (val) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'auto'
})
</script>

<template>
  <div id="projects" class="min-h-screen bg-gradient-to-b from-gray-900 to-zinc-950 py-10 md:py-20">
    <div class="container mx-auto px-6 md:px-10">

      <h2 class="text-2xl md:text-3xl font-bold text-white mb-6 text-center uppercase tracking-widest">Portfolio</h2>

      <h2 class="text-2xl md:text-3xl font-bold text-white">Features</h2>
      <hr class="text-blue-500 mt-2 w-20 mb-10 border-t-4">

      <div class="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-10">
        <div v-for="p in project.slice(0, 2)" :key="p.title"
          @click="openProject(p)"
          class="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-video cursor-pointer">
          <img :src="p.image" class="w-full h-full object-cover brightness-75 transition duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
             <span class="bg-white text-black px-5 py-2 rounded-full font-bold text-sm">Quick View</span>
          </div>
        </div>
      </div>

      <div class="my-16 md:my-20">
        <h2 class="text-2xl md:text-3xl font-bold text-white">All Projects</h2>
        <hr class="text-blue-500 mt-2 w-20 border-t-4">
        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <div v-for="p in project" :key="p.title"
            @click="openProject(p)"
            class="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[4/3] cursor-pointer">
            <img :src="p.image" class="w-full h-full object-cover brightness-75 transition duration-500 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
        <div class="absolute inset-0 bg-black/90 backdrop-blur-md" @click="closeProject"></div>

        <div class="modal-card bg-zinc-900 border border-white/10 w-full max-w-5xl max-h-[90vh] md:max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative z-10">

          <button @click="closeProject" class="absolute top-4 right-4 z-[110] p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="w-full md:w-[60%] bg-black flex items-center justify-center min-h-[250px] md:min-h-full">
            <img :src="selectedProject.image" class="w-full h-full object-contain" />
          </div>

          <div class="w-full md:w-[40%] p-6 md:p-10 flex flex-col overflow-y-auto">
            <div class="mb-6">
              <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{{ selectedProject.title }}</h3>
              <div class="h-1.5 w-12 bg-blue-600 rounded-full"></div>
            </div>

            <div class="flex-grow">
               <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                {{ selectedProject.description }}
              </p>

              <div class="grid grid-cols-1 gap-6 mb-8">
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 shrink-0 flex items-center justify-center bg-blue-500/10 rounded-xl text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-[10px] text-gray-500 block uppercase font-bold tracking-tighter">Front-End</span>
                    <span class="text-gray-100 text-sm font-medium">{{ selectedProject.frontEnd }}</span>
                  </div>
                </div>

                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 shrink-0 flex items-center justify-center bg-purple-500/10 rounded-xl text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2zm0 0l8 7 8-7" />
                    </svg>
                  </div>
                  <div>
                    <span class="text-[10px] text-gray-500 block uppercase font-bold tracking-tighter">
                       {{ selectedProject.backEnd.toLowerCase() === 'wordpress' ? 'Platform' : 'Back-End' }}
                    </span>
                    <span class="text-gray-100 text-sm font-medium">{{ selectedProject.backEnd }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-auto">
              <a v-if="selectedProject.url !== 'Upcoming'" :href="selectedProject.url" target="_blank"
                 class="flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-900/20">
                Launch Project
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <div v-else class="w-full text-center py-4 bg-zinc-800 text-gray-500 rounded-2xl italic font-medium">
                Under Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active .modal-card {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-enter-from .modal-card {
  transform: scale(0.9) translateY(30px);
  opacity: 0;
}

/* Custom scrollbar for the modal description area */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #3f3f46;
  border-radius: 10px;
}
</style>
