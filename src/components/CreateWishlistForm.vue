<template>
  <div class="w-full">
    <div class="m-5">
      <div class="flex justify-center gap-1 text-2xl mb-5">
        <div class="max-w-full">{{ wishlistEmoji }}</div>
        <p>
          {{ wishlistName || 'My cool wishlist' }}
        </p>
      </div>

      <div class="flex flex-col">
        <!--Wishlist name-->
        <!--TODO: Create reusable input component-->
        <div class="mb-3">
          <label for="wishlist-name" class="block mb-2 text-sm font-medium text-gray-900">
            Give your wishlist a name!😜 (max 20 characters)
          </label>
          <input
            id="wishlist-name"
            v-model="wishlistName"
            placeholder="My cool wishlist..."
            maxlength="20"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <!--Wishlist description-->
        <div class="mb-3">
          <label for="wishlist-description" class="block mb-2 text-sm font-medium text-gray-900">
            Describe your wishlist!
          </label>
          <input
            id="wishlist-description"
            v-model="wishlistDescription"
            placeholder="It's really cool"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <!--Wishlist category-->
        <div class="mb-3">
          <label for="wishlist-category" class="block mb-2 text-sm font-medium text-gray-900">
            Pick the wishlist category!
          </label>
          <!-- <input
            id="wishlist-description"
            v-model="wishlistCategory"
            placeholder="It's really cool"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          /> -->
          <select
            id="wishlist-category"
            v-model="wishlistCategory"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="">Pick a category...</option>
            <option>💻 - Tech</option>
            <option>⚽️ - Sports</option>
            <option>👖 - Fashion</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div id=" buttons" class="flex justify-between mb-3 px-5">
    <button
      class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
      @click="$emit('close-modal')"
    >
      Close
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      @click="saveNewWishlist"
    >
      Create
    </button>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'
import { useWishlistStore } from '@/stores/common'
import { getCurrentDateTime, createId } from '@/helpers/commonHelper'
import { router } from '../router/index.js'

/// Stores
const wishlistStore = useWishlistStore()

/// Refs
const wishlistName = ref('')
const wishlistCategory = ref('')
const wishlistEmoji = ref('😎')
const wishlistDescription = ref('')

/// Emits
defineEmits(['close-modal'])

/// Methods
const saveNewWishlist = () => {
  const newWishlist = {
    id: createId(),
    name: wishlistName.value,
    description: wishlistDescription.value,
    category: wishlistCategory.value,
    items: [],
    dateCreated: getCurrentDateTime(),
    emoji: wishlistCategory.value[0]
  }
  wishlistStore.addWishlist(newWishlist)
  router.push({ name: 'wishlist', query: { id: newWishlist.id } })
}

/// Watcher to update wishlistEmoji based on selected category
watch(wishlistCategory, (newCategory) => {
  switch (newCategory) {
    case '💻 - Tech':
      wishlistEmoji.value = '💻'
      break
    case '⚽️ - Sports':
      wishlistEmoji.value = '⚽️'
      break
    case '👖 - Fashion':
      wishlistEmoji.value = '👖'
      break
    default:
      wishlistEmoji.value = '😎' // Default emoji
  }
})
</script>
<style lang="scss" scoped></style>
