<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const isFixed = ref(false)

window.addEventListener('scroll', () => {
  isFixed.value = window.scrollY > 600
})

</script>

<template>
  <header :class="['w-full transition-all', isFixed ? 'fixed top-0' : 'hidden']" class="bg-gray-900 bg-opacity-90 backdrop-blur-sm text-white  w-full z-50 shadow-md transition-all duration-500">
    <div class="container mx-auto flex justify-between items-center px-4 py-4">

      <!-- Logo -->
      <a href="#" class="text-2xl font-bold hover:text-red-500 transition-colors">Gideon Ayao</a>

      <!-- Desktop nav -->
      <nav class="hidden md:flex space-x-8 text-lg font-medium">
        <a href="#about" class="hover:text-red-500 transition-colors">About</a>
        <a href="#skills" class="hover:text-red-500 transition-colors">Skills</a>
        <a href="#projects" class="hover:text-red-500 transition-colors">Projects</a>
        <a href="#contact" class="hover:text-red-500 transition-colors">Contact</a>
      </nav>

      <!-- Mobile hamburger button -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none p-2 rounded hover:bg-gray-700 transition-colors cursor-pointer">
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu with smooth transition -->
    <transition name="slide-fade">
      <nav v-if="isOpen" class="md:hidden bg-gray-800 bg-opacity-95 text-white">
        <ul class="flex flex-col space-y-4 p-6 text-center">
          <li><a href="#about" class="hover:text-red-500 transition-colors">About</a></li>
          <li><a href="#skills" class="hover:text-red-500 transition-colors">Skills</a></li>
          <li><a href="#projects" class="hover:text-red-500 transition-colors">Projects</a></li>
          <li><a href="#contact" class="hover:text-red-500 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<style>
/* Slide-down + fade animation for mobile menu */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
