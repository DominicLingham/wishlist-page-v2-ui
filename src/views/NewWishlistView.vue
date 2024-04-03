<template>
  <div class="container">
    <section class="py-8 px-6">
      <div class="flex flex-wrap -mx-3 items-center">
        <div class="w-full lg:w-1/2 flex items-center mb-5 lg:mb-0 px-3">
          <div>
            <h2 class="mb-1 text-2xl font-bold text-white">
              <span class="mr-sm">{{ wishlist.emoji }}</span>
              {{ wishlist.name }}
            </h2>
            <p class="text-md text-gray-300 font-medium">
              {{ wishlist.description }}
            </p>
          </div>
        </div>
        <div class="w-full lg:w-auto ml-auto px-3">
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            @click="returnToSavedWishlists">
            Back
          </button>
        </div>
      </div>
    </section>
    <section class="py-8 px-6"></section>
  </div>
</template>

<script setup>
import { router } from '@/router'
import { useWishlistStore } from '@/stores/common'
import { onMounted, computed, ref } from 'vue'

/// Store
const wishlistStore = useWishlistStore()

/// Computed
const wishlist = computed(() => wishlistStore.getWishlistById(router.currentRoute.value.query.id))

/// Variables
const wishlistTitle = wishlist.value.name
const wishlistItems = wishlist.value.items

/// Methods
const returnToSavedWishlists = () => {
  router.push({ name: 'home' })
}
</script>

<style lang="scss" scoped></style>
