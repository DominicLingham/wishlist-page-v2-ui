<template>
  <div class="flex flex-col min-h-screen font-FiraCode bg-background-primary">
    <NavbarComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>

<script setup>
import NavbarComponent from './components/layouts/NavbarComponent.vue';
import FooterComponent from './components/layouts/FooterComponent.vue'

</script>

<style lang="scss" scoped></style>