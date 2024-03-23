<template>
    <div class="m-5">
        <div class="container flex justify-center gap-1 text-2xl mb-3">
            <div>{{ wishlistEmoji }}</div>
            <p>
                {{ wishlistName }}
            </p>
        </div>
        <div class="container flex flex-col">
            <label for="wishlist-name">Give your wishlist a name!</label>

            <input type="text" v-model="wishlistName" placeholder="My cool wishlist...">
        </div>
        <div class="container flex flex-col">
            <label for="wishlist-description">Describe your wishlist!</label>
            <input type="text" placeholder="My wishlist is really cool...">
        </div>
        <div class="container flex flex-col">
            <label for="wishlist-emoji">Choose an icon!</label>
            <select name="wishlist-emoji" id="wishlist-emoji" v-model="wishlistEmoji">
                <option value="😂">😂</option>
            </select>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const wishlistName = ref('My cool wishlist');
const wishlistEmoji = ref('😎');
</script>

<style lang="scss" scoped></style>
