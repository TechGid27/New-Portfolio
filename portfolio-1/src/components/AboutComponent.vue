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


const TECH_STACK = [
  { name: "Vue.js", icon: "https://svgl.app/library/vue.svg" },
  { name: "JavaScript", icon: "https://svgl.app/library/javascript.svg" },
  { name: "Laravel", icon: "https://svgl.app/library/laravel.svg" },
  { name: "PHP", icon: "https://svgl.app/library/php.svg" },
  { name: "Java", icon: "https://svgl.app/library/java.svg" },
  { name: "Spring Boot", icon: "https://svgl.app/library/spring.svg" },
  { name: "MySQL", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e2/MySQL_textlogo.svg" },
  { name: "Figma", icon: "https://svgl.app/library/figma.svg" },
  { name: "Tailwind CSS", icon: "https://svgl.app/library/tailwindcss.svg" },
  { name: "Firebase", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Firebase_icon.svg"}
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
    <div id="about" class="w-full h-full px-6 md:px-10 pt-20 pb-16 bg-[url('/assets/background-luxury-minimalist-gradient-style-design_698780-702.jpg')] bg-cover bg-center brightness-95">
      <div v-reveal class="text-center mb-12">
        <h1 class="text-2xl font-bold uppercase tracking-widest text-gray-800">About Me</h1>
      </div>

      <div class="flex flex-col-reverse items-center md:flex-row justify-center gap-12 lg:gap-24">
        <div v-reveal class="group max-w-lg p-8 md:p-10 rounded-3xl bg-[#afb3bb91] backdrop-blur-xl border border-white/20 shadow-xl transition-all duration-700 hover:scale-[1.02]">
          <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight transition-colors group-hover:text-black">Gideon Ayao</h1>
          <p class="mt-3 text-gray-700 text-lg leading-relaxed transition-colors group-hover:text-blue-700">Bachelor of Science in Information Technology</p>
          <span class="mt-1 block text-gray-600 text-sm font-medium group-hover:text-red-600">Cebu, Philippines</span>
          <p class="mt-6 text-gray-700 italic leading-relaxed text-[15px]">"I believe that a positive attitude, strong skills, and a commitment to continuous learning are more valuable than the number of years worked."</p>

          <h4 class="mt-8 text-gray-800 font-bold text-xl uppercase tracking-wide group-hover:text-red-700 transition-colors">Current Focus</h4>
          <ul class="flex gap-4 mt-4">
            <li class="px-6 py-2 rounded-xl bg-zinc-800 text-white font-medium flex items-center gap-2 transition-all hover:scale-110 group-hover:bg-green-600">
              <img src="https://cdn.simpleicons.org/vuedotjs/white" class="w-4 h-4" /> Vue.js
            </li>
            <li class="px-6 py-2 rounded-xl bg-white/20 border border-white/30 text-gray-800 font-medium backdrop-blur-md flex items-center gap-2 transition-all hover:scale-110 group-hover:bg-white/40">
              <img src="https://cdn.simpleicons.org/laravel/FF2D20" class="w-4 h-4" /> Laravel
            </li>
          </ul>
        </div>

        <div v-reveal class="relative transition-all duration-1000 delay-300">
          <img src="/assets/7b204194-90c5-48cd-81ae-557190d2502b-BcTpyCgi.jpg" alt="profile" class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-2xl border border-white/30 transition-transform duration-500 hover:scale-105" />
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-b from-gray-900 to-zinc-950 py-20 px-6 md:px-10">
      <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
        <div class="space-y-12">
          <div v-reveal>
            <h2 class="text-3xl font-bold text-white mb-6">Who I Am?</h2>
            <div class="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 text-gray-300 hover:text-white transition-all duration-300">
              <p class="leading-relaxed">I’m a motivated, detail-oriented aspiring software developer, focusing on web development with hands-on experience creating dynamic applications using <strong>Vue, JavaScript, PHP (Laravel), Java (Spring Boot), and MySQL</strong>.</p>
            </div>
          </div>

          <div v-reveal>
            <h2 class="text-3xl font-bold text-white mb-6">Education</h2>
            <div class="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 text-gray-300 hover:text-white transition-all duration-300">
              <p class="font-bold uppercase text-white">Bachelor of Science in Information Technology</p>
              <span class="text-sm opacity-80">ACLC College of Mandaue • 2024 - 2025 (Present)</span>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-white mb-6 text-center lg:text-left">Experience</h2>
          <div v-for="(exp, index) in EXPERIENCES" :key="index"
            v-reveal
            class="p-6 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:scale-[1.02] transition-all duration-500"
            :style="{ transitionDelay: `${index * 100}ms` }">
            <h3 class="text-white font-bold text-lg">{{ exp.role }}</h3>
            <span class="text-sm text-blue-400 block mb-2">{{ exp.date }}</span>
            <p class="text-sm leading-relaxed">{{ exp.desc }}</p>
          </div>
        </div>

        <div class="absolute inset-0 pointer-events-none flex justify-center items-center opacity-20 lg:opacity-35 animate-pulse z-0">
            <Earth class="scale-150" />
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
