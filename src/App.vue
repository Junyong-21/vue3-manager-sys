<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/header.vue';

</script>

<template>
    <div class="w-screen h-screen">
        <RouterView />
    </div>
</template>

<style>
body::-webkit-scrollbar {
    display: none;
}
</style>