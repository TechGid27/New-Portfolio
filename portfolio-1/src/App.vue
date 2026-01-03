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


    <div  id="projects" class="h-full bg-gradient-to-b from-gray-900 to-zinc-950 py-20 ">
      <div class="container mx-auto px-10">
        <h2 class="text-3xl font-bold text-white mb-6 text-center uppercase">Projects</h2>
        <div class="grid md:grid-cols-2  grid-cols-1 w-full gap-10">
          <div class="w-full h-60 bg-white p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-gray-200">1</div>
          <div class="w-full h-60 bg-white p-5 rounded-xl">2</div>
          <div class="w-full h-60 bg-white p-5 rounded-xl">3</div>
          <div class="w-full h-60 bg-white p-5 rounded-xl">4</div>
        </div>
        <div class="my-10">
          <h2 class="text-3xl font-bold text-white">All Projects</h2>
          <hr class="text-white mt-2 w-40">
        </div>
        <div>

        </div>

      </div>
    </div>

    <UnderDeveloped />
  </div>




</template>

<style scoped></style>
