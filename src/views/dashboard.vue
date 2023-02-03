<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="h-[252px] mb-[20px]">
                    <template #header>
                    <div class="flex justify-center items-center pb-[20px] ">
                        <el-avatar
                            :size="120"
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        />
                        <div class="flex-1 pl-[50px] text-4xl">
                            {{ username }}
                            <br>
                            <span class="text-xl text-[#999]">管理员</span>
                        </div>
                    </div>
                    </template>
                    <div class="text-3xl text-[#999]">
                        登陆时间: 
                            <span>{{  props.currentDate }}</span>
                    </div>
                    <div class="text-3xl text-[#999]">
                        登陆地点:
                            <span>{{  props.currentLocaltion }}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
const username: String | null = localStorage.getItem('username');

const props = defineProps<{
    currentDate?: string,
    currentLocaltion?: string,
}>()


</script>
<style scoped>

</style>