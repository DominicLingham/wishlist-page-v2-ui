import { defineStore } from 'pinia'

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
    },
    removeWishlist(id) {
      const index = this.wishlists.findIndex((wishlist) => wishlist.id === id)

      if (index !== -1) {
        this.wishlists.splice(index, 1)

        this.persistWishlists()
      }
    },
    getWishlistById(id) {
      return id ? this.wishlists.find((wishlist) => wishlist.id === id) : null
    }
  }
})
