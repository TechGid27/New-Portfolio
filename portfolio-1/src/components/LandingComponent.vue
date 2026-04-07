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
  <div class="relative h-screen bg-[#050505] flex items-center justify-center overflow-hidden">

  <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/20 rounded-full blur-[140px] animate-pulse"></div>
  <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[140px] animate-pulse [animation-delay:2s]"></div>

  <Transition name="welcome-fade" appear>
    <div v-if="isVisible" class="relative z-10 text-center px-6 max-w-5xl">

      <div class="mb-10 animate-fade-in opacity-0 [animation-fill-mode:forwards]">
        <span class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span class="text-[11px] font-black uppercase tracking-[0.3em] text-gray-300">Available for new projects</span>
        </span>
      </div>

      <h1 class="text-white font-black leading-[0.95] tracking-[-0.04em] md:text-[80px] lg:text-[110px] text-[50px]">
        Hello, I’m
        <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
          Gideon Ayao
        </span>
      </h1>

      <div class="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-gray-400 text-lg md:text-2xl font-light tracking-tight">
        <p>A passionate</p>
        <span class="px-4 py-1 rounded-lg bg-white/5 border border-white/10 text-white font-medium italic backdrop-blur-sm">
          Full Stack Developer
        </span>
        <p>based in Cebu</p>
      </div>

      <div class="mt-12 flex justify-center gap-6 opacity-0 animate-slide-up [animation-delay:800ms] [animation-fill-mode:forwards]">
        <a href="#projects" class="px-8 me-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300">
          View Projects
        </a>
        <a href="#contact" class="px-8 py-4 bg-transparent me-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all duration-300">
          Contact Me
        </a>
      </div>

    </div>
  </Transition>

  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
    <div class="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line"></div>
    </div>
    <span class="text-[10px] text-white/30 uppercase tracking-[0.5em] font-bold">Explore</span>
  </div>

</div>


</template>

<style scoped>
@keyframes scroll-line {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}
.animate-scroll-line {
  animation: scroll-line 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
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
