<script setup>
import AvatarComponent from './avatarComponent.vue'

const contact = [
  { icons : "https://svgl.app/library/facebook-icon.svg",
    link : "https://www.facebook.com/gideonayao"
  },
  {
    icons : "https://svgl.app/library/instagram-icon.svg",
    link : "https://www.instagram.com/gideon25.27",
  },
  {
    icons : "https://svgl.app/library/copilot.svg",
    link : "https://github.com/TechGid27",
  }
]

</script>
<template>
  <div>
    <div id="contact">
      <div
        class="min-h-screen bg-[url('/assets/background-luxury-minimalist-gradient-style-design_698780-702.jpg')] bg-cover text-black flex items-center justify-center px-10 py-20">

        <div
          class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#1e293b]/50 p-10 rounded-3xl shadow-2xl border border-white/5">
          <div class="space-y-6">
            <div>
              <h1
                class="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent text-center md:text-left">
                Let's Talk.
              </h1>
              <p class="text-white text-lg text-center md:text-left">
                Reach me through these contact details below and let's start talking about success!
              </p>
              <div class="flex gap-5 py-3 justify-center md:justify-start">
                <a v-for="contacts in contact" :key="contacts" :href="contacts.link" target="_blank" class="align-center content-center">
                   <img  :src="contacts.icons" class="w-10 " alt="">
                </a>

              </div>
            </div>

            <div class="relative group">
              <div class="absolute"></div>
              <div class="relative overflow-hidden">
                <AvatarComponent />
              </div>
            </div>

            <div class="flex gap-4 text-sm text-gray-500">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span class="text-white">Available for hire</span>
              </div>
            </div>
          </div>

          <div class="bg-[#0f172a] p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 class="text-3xl font-bold text-white mb-6 text-left uppercase">Contact Me</h2>
            <form @submit.prevent="handleSubmit" class="space-y-5">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input type="text" placeholder="Your name"
                  class="w-full bg-[#1e293b] border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent transition placeholder-gray-300 text-white" />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input type="email" placeholder="email@example.com"
                  class="w-full bg-[#1e293b] border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent transition placeholder-gray-300 text-white" />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea rows="4" placeholder="Tell me about your project..."
                  class="w-full bg-[#1e293b] border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent transition placeholder-gray-300 text-white resize-none"></textarea>
              </div>

              <button type="submit"
                class="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg shadow-lg transform transition active:scale-[0.98] cursor-pointer">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
