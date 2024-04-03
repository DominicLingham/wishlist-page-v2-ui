<template>
  <div class="container mb-6 mt-6 text-white flex flex-col items-center">
    <div class="mb-3">
      <h2 class="text-2xl">Saved wishlists <span class="text-3xl">💕</span></h2>
      <p>These are your saved wishlists</p>
    </div>
    <div class="w-full gap-3 md:grid md:grid-cols-3 md:gap-3">
      <WishlistCard
        v-for="wishlist in userWishlists"
        :key="wishlist.id"
        :name="wishlist.name"
        :description="wishlist.description"
        :category="wishlist.category"
        :emoji="wishlist.emoji"
        :date-created="wishlist.dateCreated"
        :id="wishlist.id"
        @remove-wishlist="removeWishlist(wishlist.id)"
        @open-wishlist="openWishlist(wishlist.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from '@/stores/common'
import { computed } from 'vue'
import WishlistCard from './WishlistCard.vue'
import { router } from '@/router'

const wishlistStore = useWishlistStore()

// /// Computed
const userWishlists = computed(() => wishlistStore.userWishlists)

/// Methods
const removeWishlist = (id) => {
  wishlistStore.removeWishlist(id)
}

const openWishlist = (id) => {
  router.push({ name: 'wishlist', query: { id } })
}
</script>

<style lang="scss" scoped></style>
