<template>
  <!-- <RouterLink :to="{ name: 'wishlist' }"> -->
  <div
    class="block rounded-lg bg-neutral-700 p-6 text-surface shadow-md shadow-neutral-800 text-gray-50 max-w-md mb-3 hover:bg-red-300 hover:text-red-600"
    :id="props.id"
  >
    <h5 class="mb-2 text-xl font-medium leading-tight">
      <span class="mr-3">{{ props.emoji }}</span
      >{{ props.name }}
    </h5>
    <p class="mb-4 text-base">
      {{ props.description }}
    </p>
    <div class="flex flex-row-reverse justify-between">
      <button
        type="button"
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        @click="$emit('open-wishlist')"
      >
        Edit
      </button>
      <button
        type="button"
        class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        @click="$emit('remove-wishlist')"
      >
        Delete
      </button>
    </div>
  </div>
  <!-- </RouterLink> -->
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { RouterLink } from 'vue-router'

/// Props
const props = defineProps({
  id: String,
  name: String,
  description: String,
  category: String,
  emoji: String,
  dateCreated: String
})

/// Emits
defineEmits(['remove-wishlist', 'open-wishlist'])
</script>

<style lang="scss" scoped></style>
