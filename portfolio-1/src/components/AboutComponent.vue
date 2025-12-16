<script setup>
import Earth from "../components/EarthComponent.vue"

const ARR_EXPERIENCE = [
  [
    "💻 Full-Stack Developer",
    "2025 – Present",
    "Crafting scalable and high-performing web applications with a strong focus on user experience and seamless functionality."
  ],
  [
    "🚀 Git/GitHub WorkShop",
    "2025",
    "Participate"
  ],
  [
    "🚀 Hacktoberfest Bootcamp",
    "2025",
  ],
  [
    "🏆 Web Development Competition",
    "2025",
    "Participated in ACLC College’s web development competition, showcasing creativity and technical skills while building a fully functional website that earned second place."
  ],
  [
    "⚙️ Backend Developer",
    "2024",
    "Developed and optimized backend systems, ensuring reliability, scalability, and smooth data flow across applications.",
  ],
  [
    "🎨 Frontend Developer",
    "2022-2023",
    "Designed and built engaging, responsive user interfaces that deliver intuitive and visually appealing web experiences."
  ]
];

</script>


<template>
  <div>
    <div
      class="container-full px-10 mx-auto py-10 bg-[url('/assets/background-luxury-minimalist-gradient-style-design_698780-702.jpg')] bg-cover brightness-90">
      <div class="text-2xl text-center ">
        <h1 class="font-bold uppercase">about me</h1>
      </div>
      <div class="flex flex-col-reverse items-center md:flex-row justify-center gap-16 md:gap-24 mt-10">
        <div class="group max-w-lg mt-5 p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20
                      shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500
                      hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
          <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight
                          transition-all duration-300 group-hover:text-gray-950">
            Gideon Ayao
          </h1>
          <p class="mt-3 text-gray-700 text-lg leading-relaxed
                          transition-colors duration-300 group-hover:text-sky-500">
            Bachelor of Science in Information Technology
          </p>

          <span class="mt-1 block text-gray-600 text-sm tracking-wide
                            transition-colors duration-300 group-hover:text-red-700">
            Cebu, Philippines
          </span>

          <p class="mt-6 text-gray-700 italic leading-relaxed text-[15px]
                          transition-all duration-300 group-hover:text-blue-600">
            "I believe that a positive attitude, strong skills, and a commitment
            to continuous learning are more valuable than the number of years worked."
          </p>

          <h4 class="mt-8 group-hover:text-red-700 gray-600 font-semibold text-xl tracking-wide">
            Current Focus
          </h4>

          <ul class="flex gap-4 mt-3 text-gray-900 font-medium">
            <li
              class="px-5 py-2 rounded-2xl bg-white/20 backdrop-blur-md border
                          transition-all duration-300 group-hover:bg-white/40 bg-linear-to-r from-zinc-600 to-gray-900 group-hover:from-green-600 group-hover:to-orange-100 group-hover:blur-10 text-white">
              Vue.js
            </li>

            <li class="px-5 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30
                          transition-all duration-300 group-hover:bg-white/40">
              Laravel
            </li>
          </ul>
        </div>
        <div class="flex justify-center items-center">
          <img src="/assets/7b204194-90c5-48cd-81ae-557190d2502b-BcTpyCgi.jpg" alt="profile" class="w-100 h-90 md:w-90 md:h-90 object-cover rounded-3xl shadow-xl border border-white/20
                        transition-all duration-500 hover:scale-105 hover:shadow-2xl" />
        </div>
      </div>
    </div>
  </div>
  <div class="container-full pt-20 pb-50 bg-linear-to-t from-zinc-900 to-gray-900 py-10 mx-auto px-10">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row gap-25 justify-self-center relative z-3 relative">
        <div class="text-white ">
          <div>
            <h2 class="text-3xl font-bold text-center capitalize">who i am ?</h2>
            <div
              class="max-w-lg mt-5 p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20
                    shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500
                    hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]  text-[#ffffffa3] hover:text-white transition-all duration-500 text-[#ffffffa3]">
              <p>I’m a motivated and detail-oriented software developer with hands-on experience in building dynamic web
                applications.
                Skilled in both frontend and backend technologies such as Vue, JavaScript, PHP (Laravel), Java (Spring
                Boot), and MySQL,
                I strive to create user-friendly, efficient, and scalable digital solutions. <br> <br>
                I’ve collaborated with clients on e-commerce projects, applying modern frameworks and best practices to
                deliver clean, responsive designs. <br> <br>
                Beyond coding, I enjoy learning emerging technologies, exploring design tools like Figma, and
                continuously improving my technical and problem-solving skills.
                I’m passionate about growth, teamwork, and contributing to projects that make a real impact in the tech
                community. </p>
            </div>
          </div>
          <!-- education  -->
          <div class="mt-10 relative z-3">
            <h2 class="text-3xl font-bold text-center capitalize">education</h2>
            <div
              class="max-w-lg mt-5 p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20
                      shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500
                      hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] text-[#ffffffa3] hover:text-white transition-all duration-500 text-[#ffffffa3]">

              <p>bachelor science in information technology</p>
              <span>ACLC College of Mandaue • 2024 - 2025 (Present)</span>
            </div>

          </div>
          <!-- display  -->
          <div
            class="text-center w-100 absolute top-320 right-20 z-[1] scale-[0.90] text-center sm:scale-[1.20] lg:scale-[1.30] md:scale-[1.05] sm:left-[50px] sm:top-130 md:left-[60px] md:top-130 lg:left-[60px] transition-transform-all duration-500">
            <Earth />
          </div>
        </div>
        <div class="text-white z-2">
          <h2 class="capitalize text-center text-3xl font-bold text-center capitalize">experience</h2>
          <div v-for="index in ARR_EXPERIENCE" :key="index"
            class="max-w-lg mt-5 p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20
                        shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-500
                        hover:scale-[1.04] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] text-[#ffffffa3] hover:text-white transition-all duration-500 text-[#ffffffa3]">
            <h3>{{ index[0] }}</h3>
            <span class="py-1">{{ index[1] }}</span>
            <p class="text-medium mt-1">
              {{ index[2] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
