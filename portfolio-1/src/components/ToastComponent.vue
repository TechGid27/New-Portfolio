<script setup>
import { useToastStore } from '../stores/toast.js';
const toast = useToastStore();

// Ensure you have a way to trigger the removal
const remove = (id) => {
  toast.removeMessage(id); // Adjust based on your actual store method
};
</script>

<template>
  <div class="fixed bottom-6 right-6 flex flex-col gap-3 z-[100] pointer-events-none overflow-hidden">
    <TransitionGroup
      name="toast"
      tag="div"
      class="flex flex-col gap-3 items-end"
    >
      <div
        v-for="msg in toast.messages"
        :key="msg.id"
        class="pointer-events-auto relative group flex items-center gap-3 min-w-[340px] max-w-md p-4 rounded-xl border backdrop-blur-md transition-all shadow-lg"
        :class="[
          msg.type === 'success'
            ? 'bg-white/95 border-zinc-200 text-zinc-900 dark:bg-zinc-900/95 dark:border-zinc-800 dark:text-zinc-100'
            : 'bg-white/95 border-red-100 text-red-900 dark:bg-zinc-900/95 dark:border-red-900/30 dark:text-red-100'
        ]"
      >
        <div
          class="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
          :class="msg.type === 'success' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'"
        >
           <svg v-if="msg.type === 'success'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>

        <div class="flex-1 text-[13px] font-medium tracking-tight">
          {{ msg.message }}
        </div>

        <button
          @click="remove(msg.id)"
          class="opacity-40 hover:opacity-100 transition-opacity p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-4 h-4">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>

.toast-enter-active {
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
}
.toast-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 1, 1);
  position: absolute;
}
.toast-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.toast-move {
  transition: transform 0.4s cubic-bezier(0.2, 1, 0.3, 1);
}
</style>
