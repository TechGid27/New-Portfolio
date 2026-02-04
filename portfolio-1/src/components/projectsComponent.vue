<script setup>

const project = [
  {
    image: "/assets/mcsservice.png",
    url: "https://mcsservices.org",
    frontEnd: "HTML,CSS Bootstrap",
    backEnd: "Wordpress",
    description: "Cloud Design Build serves construction needs by providing quality, innovative, and caring solutions for homes and businesses"
  },
  {
    image: "/assets/cloud.png",
    url: "https://clouddesignbuild.com",
    frontEnd: "HTML,CSS Bootstrap",
    backEnd: "Wordpress",
    description: " Athletes and Models Agency is about showing the human side of Social Media Influencers by  providing them with a Social Media Crowdfunding Platform. "
  },
  {
    title: "Lost and Found",
    image: "/assets/screencapture-127-0-0-1-8000-login-2026-02-04-22_18_37.png",
    url: "Unavailabe",
    frontEnd: "HTML(Blade),Tailwind CSS",
    backEnd: "Laravel",
    description: "I propose developing a Lost and Found System for ACLC Mandaue College that allows users to report, view, and claim lost items online with proper authentication to ensure rightful ownership."
  }
]

</script>

<template>
  <div>
    <div id="projects" class="h-full bg-gradient-to-b from-gray-900 to-zinc-950 py-20 ">
      <div class="container mx-auto px-10">
        <h2 class="text-3xl font-bold text-white mb-6 text-center uppercase">Projects</h2>


        <div class="grid md:grid-cols-2  grid-cols-1 w-full gap-10">
          <div v-for="projects in project.slice(0, 2)" :key="projects.name" class="group relative w-full rounded-xl overflow-hidden
         bg-white/10 backdrop-blur-lg border border-white/20
         text-gray-200
         aspect-[10/5] sm:aspect-[10/7] lg:aspect-[16/9]  hover:cursor-pointer">
            <img :src="projects.image" class="w-full h-full object-cover brightness-75
           transition duration-300 group-hover:brightness-50" alt="" />

            <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-6
           opacity-0 translate-y-4
           group-hover:opacity-100 group-hover:translate-y-0
           transition-all duration-300 ">
              <p class="text-xs sm:text-sm lg:text-base leading-relaxed text-center">
                Visit:
                <a :href="project.url" target="_blank" class="underline text-blue-300">
                  {{ projects.url }}
                </a>
                <br /><br />

                <strong>Tech Stack:</strong><br />
                CMS: {{ projects.backEnd }}<br />
                Front-End: {{ projects.frontEnd }}<br /><br />

                {{ projects.description }}
              </p>
            </div>
          </div>


        </div>
        <div class="my-10">
          <h2 class="text-3xl font-bold text-white">All Projects</h2>
          <hr class="text-white mt-2 w-40">
          <div class="mt-10">

            <div class="grid md:grid-cols-3  grid-cols-1 w-full gap-10">
              <div v-for="projects in project" :key="projects.name" class="group relative w-full rounded-xl overflow-hidden
         bg-white/10 backdrop-blur-lg border border-white/20
         text-gray-200
         aspect-[10/5] sm:aspect-[10/7] lg:aspect-[10/9]  hover:cursor-pointer">
                <img :src="projects.image" class="w-full h-full object-cover brightness-75
           transition duration-300 group-hover:brightness-50" alt="" />

                <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-6
           opacity-0 translate-y-4
           group-hover:opacity-100 group-hover:translate-y-0
           transition-all duration-300 ">
                  <p class="text-xs sm:text-sm lg:text-base leading-relaxed text-center">
                     {{ projects.backEnd.toLowerCase() === "wordpress" ? "Visit" : "Title : " + projects.title }} :
                    <a :href="projects.url" target="_blank" class="underline text-blue-300">
                      {{ projects.url }}
                    </a>
                    <br /><br />

                    <strong>Tech Stack:</strong><br />
                    {{ projects.backEnd.toLowerCase() === "wordpress" ? "CMS" : "Back-end" }}: {{ projects.backEnd }}<br>
                    Front-End: {{ projects.frontEnd }}<br /><br />

                  <span
                    class="opacity-0 transition-opacity duration-[500ms] group-hover:opacity-100">
                    {{ projects.description }}
                  </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>

      </div>
    </div>

  </div>
</template>
