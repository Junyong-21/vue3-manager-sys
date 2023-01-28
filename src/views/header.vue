<template>
<header class="sticky top-0 flex  shadow-lg backdrop-filter  backdrop-blur-md backdrop-contrast-100">
    <nav class="container flex text-6xl text-black py-6 items-center">
        <router-link to="/">
            <div class="flex items-center gap-6">
                <div class="w-1/12 h-1/12" >
                    <img src="../assets/logo.png" alt="">
                </div>
                <p>后台管理系统</p>
            </div>
        </router-link>
        <div class="flex flex-1 justify-end">
                <i class="glyphicon glyphicon-user hover:text-weather-secondary duration-150 cursor-pointer" @click="toggleModel"></i>
        </div>
        
    </nav>
</header>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import BaseModel from './BaseModel.vue'
import LoginView from './loginView.vue';

const modelActive = ref<Boolean>(false)
const toggleModel = () => {
    modelActive.value = !modelActive.value
}
</script>