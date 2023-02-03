<script setup lang="ts">
import { ref } from 'vue'
import SideBar from '@/components/sideBar.vue';
import Header from '@/components/header.vue';
import Tags from '@/components/tags.vue';

// 获取登陆时间
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
// 时分秒
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
const currentDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

// 获取登陆地点的经纬度
let currentLocaltion = ref();
const getMyLocaltion = () => {
    if (navigator.geolocation) {
        //检测浏览器是否支持地理定位API
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else {
        alert("Oops, no geolocation support.");
    }
}

const displayLocation = (position: any) => { 
    const latitude = Math.trunc(position.coords.latitude); //得到纬度
    const longitude = Math.trunc(position.coords.longitude); //得到经度
    currentLocaltion.value = `( ${latitude},${longitude} )`;
}

getMyLocaltion()
</script>

<template>
    <div class="bg-cover bg-[url('../assets/bg.jpg')] w-screen h-screen">
        <Header></Header>
        <SideBar></SideBar>
        <Tags class="absolute left-[200px] right-0 top-[70px] float-right bg-white"></Tags>
        <div class="absolute top-[100px] left-[200px] right-0 bottom-0 bg-[#f0f0f0] box-border p-[10px]">
                <router-view v-slot="{ Component }">
                    <component :is="Component" class="w-auto h-full p-[10px] box-border bg-white overflow-y-scroll" :currentDate="currentDate" :currentLocaltion="currentLocaltion"></component>
                </router-view>
        </div>
    </div>
</template>
