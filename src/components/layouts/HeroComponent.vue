<template>
    <div class="container flex flex-col justify-center mt-6 mb-6 py-6">
        <div class="container flex justify-center">
            <h2 class="text-4xl text-white">{{ title }}</h2>
        </div>
        <div class="flex justify-center">
            <slot name="hero-copy" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String
    }
})

</script>

<style lang="scss" scoped></style>