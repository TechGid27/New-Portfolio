<script setup>
import { ref, onMounted } from 'vue';

// Control the visibility for the entrance animation
const isVisible = ref(false);

onMounted(() => {
  // Trigger animation slightly after load for a smooth feel
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <div
    class="h-screen bg-gradient-to-t from-zinc-900 to-gray-900 flex items-center justify-center overflow-hidden relative">

    <Transition name="welcome-fade" appear>
      <div v-if="isVisible" class="text-center z-10 px-4">

        <h1 class="text-white lg:text-[56px] md:text-[45px] text-[35px] leading-tight tracking-tight">
          Hello, I’m <span
            class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Gideon
            Ayao</span>
        </h1>

        <p class="text-gray-300 text-[22px] mt-4 delay-200 animate-slide-up">
          I’m an <span class="text-white font-medium italic">Full Stack Developer</span>
        </p>

        <div class="mt-8 delay-500 animate-slide-up opacity-0 [animation-fill-mode:forwards]">
          <span
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FF3838] shadow-xl backdrop-blur-sm">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Cebu, Philippines
          </span>
        </div>
      </div>
    </Transition>

    <div
      class="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce text-sm flex flex-col items-center gap-2">
      <span class="tracking-widest uppercase text-[10px] font-bold">Scroll</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>

    <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none">
    </div>
  </div>
</template>

<style scoped>
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}

.delay-200 {
  animation-delay: 0.2s;
}

.delay-500 {
  animation-delay: 0.5s;
}

.welcome-fade-enter-active {
  transition: opacity 1.2s ease-out;
}

.welcome-fade-enter-from {
  opacity: 0;
}
</style>
