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

    <UnderDeveloped />

  </div>




</template>

<style scoped></style>
