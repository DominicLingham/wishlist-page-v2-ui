<template>
    <header class="sticky top-0 bg-transparent">
        <nav class="flex sm:flex-row items-start gap-4 text-white py-6 px-6">
            <RouterLink :to="{ name: 'home' }">
                <div class="flex items-center gap-3 hover:text-red-300">
                    <i class="fa-regular fa-heart text-2xl"></i>
                    <p class="text-2xl">iWantThis</p>
                </div>
            </RouterLink>
        </nav>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>