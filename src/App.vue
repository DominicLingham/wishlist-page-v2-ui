<template>
  <div class="flex flex-col min-h-screen font-FiraCode bg-background-primary">
    <NavbarComponent />
    <RouterView />
  </div>
</template>

<script setup>
import NavbarComponent from './components/layouts/NavbarComponent.vue';

</script>

<style lang="scss" scoped></style>