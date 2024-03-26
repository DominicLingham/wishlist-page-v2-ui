<template>
    <div class="container mb-6 mt-6 text-white flex flex-col items-center">
        <div class="mb-3">
            <h2 class="text-2xl">Saved wishlists <span class="text-3xl">💕</span></h2>
            <p>These are your saved wishlists</p>
        </div>
        <div class="w-full gap-3 md:grid md:grid-cols-3 md:gap-3">
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
        </div>
    </div>
</template>

<script setup>
import WishlistCard from './WishlistCard.vue'
</script>

<style lang="scss" scoped></style>