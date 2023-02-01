<script setup lang="ts">
import SideBar from '@/components/sideBar.vue';
import Header from '@/components/header.vue';
import Tags from '@/components/tags.vue';

</script>

<template>
    <div class="bg-cover bg-[url('../assets/bg.jpg')] w-screen h-screen">
        <Header></Header>
        <SideBar></SideBar>
        <Tags class="absolute left-[200px] right-0 top-[70px] float-right bg-white"></Tags>
        <div class="absolute top-[100px] left-[200px] right-0 bottom-0 bg-[#f0f0f0] box-border p-[10px]">
                <router-view v-slot="{ Component }">
                    <component :is="Component" class="w-auto h-full p-[10px] box-border bg-white overflow-y-scroll"></component>
                </router-view>
        </div>
    </div>
</template>
