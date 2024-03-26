<template>
    <RouterLink :to="{ name: 'wishlist' }">
        <div
            class="block rounded-lg bg-neutral-700 p-6 text-surface shadow-md shadow-neutral-800 text-gray-50 max-w-md mb-3 hover:bg-red-300 hover:text-red-600">
            <h5 class="mb-2 text-xl font-medium leading-tight">😂 Card title</h5>
            <p class="mb-4 text-base">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </p>
            <div class="flex flex-row-reverse">
                <button type="button"
                    class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Edit
                </button>
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped></style>