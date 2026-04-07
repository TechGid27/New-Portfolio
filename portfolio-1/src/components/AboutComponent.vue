<script setup>
import { ref, onMounted } from 'vue';
import Earth from "../components/EarthComponent.vue"

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
});

const EXPERIENCES = [
  { role: "💻 Full-Stack Developer", date: "2025 – Present", desc: "Crafting scalable and high-performing web applications with a strong focus on user experience." },
  { role: "🚀 Git/GitHub Workshop", date: "2025", desc: "Participant" },
  { role: "🚀 Hacktoberfest Bootcamp", date: "2025", desc: "Active contributor and participant in open-source workshops." },
  { role: "🏆 Web Development Competition", date: "2025", desc: "Earned second place at ACLC College, building a fully functional responsive website." },
  { role: "⚙️ Backend Developer", date: "2024", desc: "Developed and optimized backend systems, ensuring reliability and smooth data flow." },
  { role: "🎨 Frontend Developer", date: "2022-2023", desc: "Designed and built engaging, responsive user interfaces with a focus on UX/UI." }
];

const vReveal = {
  mounted: (el) => {
    el.classList.add('reveal-hidden');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });
    observer.observe(el);
  }
};
</script>

<template>
  <section class="relative overflow-hidden">
    <div
      class="bg-[url('/assets/background-luxury-minimalist-gradient-style-design_698780-702.jpg')] bg-cover bg-center overflow-hidden">
      <div id="about" class="relative mx-auto max-w-[94%]  w-full min-h-screen px-6 md:px-16 lg:px-25 py-24 ">

        <div v-reveal class="max-w-7xl mx-auto mb-20">
          <div class="inline-flex items-center gap-4 mb-4">
            <div class="h-[1px] w-12 bg-black opacity-30"></div>
            <span class="text-xs font-bold text-gray-900 uppercase tracking-[0.5em]">Discovery</span>
          </div>
          <h2 class="text-5xl md:text-8xl font-black text-black tracking-tighter leading-none">
            About Me<span class="text-blue-600">.</span>
          </h2>
        </div>

        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          <div v-reveal class="lg:col-span-5 relative group">
            <div
              class="absolute -inset-4 border border-black/5 rounded-[40px] translate-x-2 translate-y-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-700">
            </div>
            <div class="relative z-10 overflow-hidden rounded-[32px] aspect-[4/5] shadow-2xl">
              <img src="/assets/7b204194-90c5-48cd-81ae-557190d2502b-BcTpyCgi.jpg" alt="Gideon Ayao Profile"
                class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div
              class="absolute -bottom-6 -right-6 z-20 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/50 hidden md:block">
              <p class="text-gray-500 text-xs uppercase tracking-widest font-bold">Based In</p>
              <p class="text-black font-black text-lg">Cebu, PH</p>
            </div>
          </div>

          <div v-reveal class="lg:col-span-7 space-y-8 lg:pt-12">
            <div class="space-y-2">
              <h3 class="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Gideon Ayao</h3>
              <p class="text-blue-600 font-semibold text-lg md:text-xl">BS in Information Technology</p>
            </div>

            <p class="text-gray-700 text-lg leading-relaxed max-w-xl">
              <span class="font-bold text-black italic">"I believe that a positive attitude, strong skills, and a
                commitment to continuous learning are more valuable than the number of years worked."</span>
            </p>

            <div class="h-px w-full bg-black/5"></div>

            <div class="space-y-6">
              <p class="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Current Tech Focus</p>
              <div class="flex flex-wrap gap-3">
                <div
                  class="group/chip flex items-center gap-3 px-5 py-3 rounded-lg bg-gray-900 text-white shadow-lg transition-all hover:bg-black hover:-translate-y-1">
                  <img src="https://svgl.app/library/kotlin.svg" class="w-5 h-5" />
                  <span class="text-sm font-bold">Kotlin</span>
                </div>
                <div
                  class="group/chip flex items-center gap-3 px-5 py-3 rounded-lg bg-white border border-gray-200 shadow-sm transition-all hover:border-red-500 hover:-translate-y-1">
                  <img src="https://cdn.simpleicons.org/laravel/FF2D20" class="w-5 h-5" />
                  <span
                    class="text-sm font-bold text-gray-800 group-hover/chip:text-red-600 transition-colors">Laravel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-b from-gray-900 to-zinc-950 py-24 overflow-hidden">
      <div class="container mx-auto px-6 md:px-10  relative z-10">

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div class="lg:col-span-5 space-y-16">
            <div v-reveal class="group">
              <div class="flex items-center gap-4 mb-8">
                <h2 class="text-4xl font-black text-white tracking-tighter">Who I Am <span
                    class="text-blue-500">?</span></h2>
                <div class="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              </div>
              <div
                class="p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 ring-1 ring-white/5 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-white/20">
                <p class="text-gray-400 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">
                  I’m a motivated, detail-oriented aspiring <span class="text-white font-bold">Software
                    Developer</span>, focusing on web development with hands-on experience creating dynamic applications
                  using
                  <span class="text-blue-400 font-medium italic">Vue, JavaScript, PHP (Laravel), Java (Spring Boot), and
                    MySQL.</span>
                </p>
              </div>
            </div>

            <div v-reveal class="group">
              <div class="flex items-center gap-4 mb-8">
                <h2 class="text-4xl font-black text-white tracking-tighter">Education</h2>
                <div class="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              </div>
              <div class="relative pl-8 border-l-2 border-blue-500/30">
                <div
                  class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                </div>

                <div class="space-y-2">
                  <h3 class="text-xl font-bold text-white uppercase tracking-wider">BS in Information Technology</h3>
                  <p class="text-blue-400 font-medium">ACLC College of Mandaue</p>
                  <span
                    class="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono">2024
                    - 2025 (Present)</span>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div v-reveal class="flex items-center gap-4 mb-12">
              <h2 class="text-4xl font-black text-white tracking-tighter">Experience</h2>
              <div class="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </div>

            <div class="space-y-4">
              <div v-for="(exp, index) in EXPERIENCES" :key="index" v-reveal
                class="relative group p-8 rounded-[2rem] bg-white/5 border border-white/10 transition-all duration-500 hover:bg-white/[0.07] hover:-translate-y-2 overflow-hidden"
                :style="{ transitionDelay: `${index * 100}ms` }">

                <div
                  class="absolute -right-20 -top-20 w-40 h-40 bg-blue-500/10 blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700">
                </div>

                <div class="relative z-10">
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <h3 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{{ exp.role }}
                    </h3>
                    <span
                      class="text-sm font-mono text-gray-500 bg-black/30 px-4 py-1 rounded-full border border-white/5">{{
                      exp.date }}</span>
                  </div>
                  <p class="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors italic">
                    {{ exp.desc }}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div class="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10 z-0">
          <Earth class="scale-[2] rotate-12" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal-hidden {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}

[style*="transition-delay"] {
  transition-property: all;
}
</style>
