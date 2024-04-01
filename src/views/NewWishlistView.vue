<template>
  <div>
    <h2>Hello this is new wishlist page!</h2>
    <button
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      @click="returnToSavedWishlists"
    >
      Back
    </button>
  </div>
</template>

<script setup>
import { router } from '@/router'

/// Methods
const returnToSavedWishlists = () => {
  router.push({ name: 'home' })
}
</script>

<style lang="scss" scoped></style>
