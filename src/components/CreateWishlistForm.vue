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

                <!--Wishlist name TODO: create reusable component-->
                <div class="mb-3">
                    <label for="wishlist-name" class="block mb-2 text-sm font-medium text-gray-900">
                        Give your wishlist a name!😜 (max 20 characters)
                    </label>
                    <input id="wishlist-name" v-model="wishlistName" placeholder="My cool wishlist..." maxlength="20"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>
                <!--Wishlist description-->
                <div class="mb-3">
                    <label for="wishlist-description" class="block mb-2 text-sm font-medium text-gray-900">
                        Describe your wishlist!
                    </label>
                    <input id="wishlist-description" v-model="wishlistDescription" placeholder="It's really cool"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>

            </div>
        </div>
    </div>
    <div id=" buttons" class="flex justify-between mb-3 px-5">
        <button
            class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            @click="$emit('close-modal')">Close</button>
        <button
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Create</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const wishlistName = ref('')
const wishlistEmoji = ref('😎')
const wishlistDescription = '';

defineEmits(['close-modal', 'save-wishlist']);

</script>
<style lang="scss" scoped></style>
