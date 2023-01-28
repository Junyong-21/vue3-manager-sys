<script setup lang="ts">
import SideBar from '@/components/sideBar.vue';
import Header from './header.vue';

const username: String | null = localStorage.getItem('username');

</script>

<template>
    <div class="bg-cover bg-[url('../assets/bg.jpg')] w-screen h-screen">
        <Header></Header>
        <SideBar></SideBar>
    </div>
</template>
