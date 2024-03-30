import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useWishlistStore = defineStore({
  id: 'wishlistStore',
  state: () => ({
    wishlists: JSON.parse(localStorage.getItem('wishlists')) || []
  }),
  getters: {
    userWishlists() {
      return this.wishlists
    }
  },
  actions: {
    addWishlist(newWishlist) {
      this.wishlists.push(newWishlist)
      this.persistWishlists()
    },
    persistWishlists() {
      localStorage.setItem('wishlists', JSON.stringify(this.wishlists))
    }
  }
})
