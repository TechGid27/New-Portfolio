<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4',
    isScrolled ? 'py-3' : 'py-6'
  ]">
    <div :class="[
      'mx-auto max-w-6xl transition-all duration-500 rounded-2xl border border-white/10 flex flex-col',
      isScrolled
        ? 'bg-gray-900/80 backdrop-blur-md shadow-lg px-6 py-3'
        : 'bg-transparent px-4 py-2'
    ]">
      <div class="flex justify-between items-center">
        <a href="#" class="group flex items-center gap-2">
          <div
            class="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-400 rounded-lg flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform">
            G</div>
          <span class="text-xl font-bold tracking-tight text-white group-hover:text-red-500 transition-colors">
            Gideon <span
              class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Ayao</span>
          </span>
        </a>

        <nav class="hidden md:flex items-center space-x-1">
          <a v-for="item in ['About', 'Skills', 'Projects', 'Contact']" :key="item" :href="`#${item.toLowerCase()}`"
            class="px-4 py-2 rounded-full text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all">
            {{ item }}
          </a>
        </nav>

        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-white p-2 hover:bg-white/10 rounded-xl transition-colors cursor-pointer">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
        <nav v-if="isOpen" class="md:hidden mt-4 pb-4">
          <ul class="flex flex-col gap-2">
            <li v-for="item in ['About', 'Skills', 'Projects', 'Contact']" :key="item">
              <a :href="`#${item.toLowerCase()}`" @click="isOpen = false"
                class="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-red-500/20 transition-all">
                {{ item }}
              </a>
            </li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
