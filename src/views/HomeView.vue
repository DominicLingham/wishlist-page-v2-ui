<script setup>
import { ref } from "vue";
import HeroComponent from '@/components/layouts/HeroComponent.vue';
import BaseModal from '@/components/BaseModal.vue'
import SavedWishlistsListing from "@/components/SavedWishlistsListing.vue";
import CreateWishlistForm from '@/components/CreateWishlistForm.vue';

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
}

</script>

<template>
  <main>
    <HeroComponent title="Your Wishlists🌟">
      <template v-slot:hero-copy>
        <div class="mt-6">
          <p class="text-white">Open one of your saved wishlists below, or create a new wishlist!</p>
        </div>
      </template>
    </HeroComponent>
    <div class="container flex justify-center">
      <button @click="toggleModal"
        class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
        <i class="fa-solid fa-plus"></i>
        Create Wishlist
      </button>
    </div>
    <h1 class="text-white" v-for="item in wishlists" :key="item">{{ item }}</h1>
    <BaseModal :modal-active="modalActive">
      <CreateWishlistForm @close-modal="toggleModal" />
    </BaseModal>
    <SavedWishlistsListing />
  </main>
</template>
