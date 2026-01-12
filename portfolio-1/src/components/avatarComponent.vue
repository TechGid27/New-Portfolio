<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useAvatarStore } from '../stores/avatar.js'

const container = ref(null)
const avatarStore = useAvatarStore()

const handleMouseMove = (event) => {
  if (container.value) {
    const rect = container.value.getBoundingClientRect()
    avatarStore.updateMouse(event.clientX, event.clientY, rect)
  }
}

onMounted(() => {
  if (container.value) {
    avatarStore.init(container.value)
  }
})

onBeforeUnmount(() => {
  avatarStore.cleanup()
})
</script>

<template>
  <div
    ref="container"
    class="w-full h-full min-h-[400px]"
    @mousemove="handleMouseMove"
  ></div>
</template>


