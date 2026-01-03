<script setup>
import StContent from './components/LandingComponent.vue';
import HeaderCom from './components/HeaderCom.vue';

import AboutComponent from './components/AboutComponent.vue';
import SkillsComponent from './components/SkillsComponent.vue';
import UnderDeveloped from './components/UnderDeveloped.vue';


</script>

<template>

  <div class="overflow-x-hidden scroll-smooth">
    <HeaderCom />
    <StContent />
    <AboutComponent />
    <SkillsComponent />


    <div id="projects" class="h-full bg-gradient-to-b from-gray-900 to-zinc-950 py-20 ">
      <div class="container mx-auto px-10">
        <h2 class="text-3xl font-bold text-white mb-6 text-center uppercase">Projects</h2>
        <div class="grid md:grid-cols-2  grid-cols-1 w-full gap-10">
          <div class="group relative w-full rounded-xl overflow-hidden
         bg-white/10 backdrop-blur-lg border border-white/20
         text-gray-200
         aspect-[10/5] sm:aspect-[10/7] lg:aspect-[16/9]  hover:cursor-pointer">
            <img src="/assets/cloud.png" class="w-full h-full object-cover brightness-75
           transition duration-300 group-hover:brightness-50" alt="" />

            <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-6
           opacity-0 translate-y-4
           group-hover:opacity-100 group-hover:translate-y-0
           transition-all duration-300 ">
              <p class="text-xs sm:text-sm lg:text-base leading-relaxed text-center">
                Visit:
                <a href="https://clouddesignbuild.com" target="_blank" class="underline text-blue-300">
                  clouddesignbuild.com
                </a>
                <br /><br />

                <strong>Tech Stack:</strong><br />
                CMS: WordPress<br />
                Front-End: HTML, CSS, Bootstrap<br /><br />

                Cloud Design Build serves construction needs by providing quality,
                innovative, and caring solutions for homes and businesses.
              </p>
            </div>
          </div>
          <div class="group relative w-full rounded-xl overflow-hidden
         bg-white/10 backdrop-blur-lg border border-white/20
         text-gray-200
         aspect-[10/5] sm:aspect-[10/7] lg:aspect-[16/9]  hover:cursor-pointer">
            <img src="/assets/cloud.png" class="w-full h-full object-cover brightness-75
           transition duration-300 group-hover:brightness-50" alt="" />

            <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-6
           opacity-0 translate-y-4
           group-hover:opacity-100 group-hover:translate-y-0
           transition-all duration-300 ">
              <p class="text-xs sm:text-sm lg:text-base leading-relaxed text-center">
                Visit:
                <a href="https://clouddesignbuild.com" target="_blank" class="underline text-blue-300">
                  clouddesignbuild.com
                </a>
                <br /><br />

                <strong>Tech Stack:</strong><br />
                CMS: WordPress<br />
                Front-End: HTML, CSS, Bootstrap<br /><br />

                Cloud Design Build serves construction needs by providing quality,
                innovative, and caring solutions for homes and businesses.
              </p>
            </div>
          </div>

        </div>
        <div class="my-10">
          <h2 class="text-3xl font-bold text-white">All Projects</h2>
          <hr class="text-white mt-2 w-40">
          <div class="mt-10">
            <div class="flex md:flex-row flex-col gap-3">
              <div v-for="items in 3" :key="items"
                class="w-full h-60 bg-white p-5 rounded-xl text-center content-center bg-white/10 backdrop-blur-lg border border-white/20 text-gray-200">
                <h2>Upcomming ...</h2>

              </div>
            </div>
          </div>
        </div>
        <div>

        </div>

      </div>
    </div>

    <UnderDeveloped />
  </div>




</template>

<style scoped></style>
