import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastStore = defineStore('toast', () => {
  const messages = ref([])

  function show(message, type = 'success', duration = 3000) {
    const id = Date.now()
    messages.value.push({ id, message, type })
    setTimeout(() => {
      messages.value = messages.value.filter(m => m.id !== id)
    }, duration)
  }

  return { messages, show }
})
