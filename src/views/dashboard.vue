<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card shadow="hover" class="h-[252px] mb-[20px]">
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
                <el-card shadow="hover" style="height: 252px">
					<template #header>
						<div>
							<span>语言详情</span>
						</div>
					</template>
					Vue
					<el-progress :percentage="82.4" color="#42b983"></el-progress>
					TypeScript
					<el-progress :percentage="13.2" color="#f1e05a"></el-progress>
					CSS
					<el-progress :percentage="3.5"></el-progress>
					HTML
					<el-progress :percentage="0.9" color="#f56c6c"></el-progress>
				</el-card>
            </el-col>
            <el-col :span="16">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="flex items-center h-[100px] ">
                                <div class="text-[50px] w-[100px] h-[100px] text-center leading-[100px] text-[#fff] bg-blue-600">
                                    <el-icon ><User /></el-icon>
                                </div>
                                    <div class="flex-1 text-center text-[14px] text-blue-600">
                                        <div class="text-[30px] font-bold">1111</div>
                                        <div class="text-[#999]">用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="flex items-center h-[100px] ">
                                <div class="text-[50px] w-[100px] h-[100px] text-center leading-[100px] text-[#fff] bg-green-600">
                                    <el-icon ><ChatDotRound /></el-icon>
                                </div>
                                    <div class="flex-1 text-center text-[14px] text-green-600">
                                        <div class="text-[30px] font-bold">1111</div>
                                        <div class="text-[#999]">系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="8">
                        <el-card shadow="hover" :body-style="{ padding: '0px' }">
                            <div class="flex items-center h-[100px] ">
                                <div class="text-[50px] w-[100px] h-[100px] text-center leading-[100px] text-[#fff] bg-pink-400">
                                    <el-icon ><Goods /></el-icon>
                                </div>
                                    <div class="flex-1 text-center text-[14px] text-pink-400">
                                        <div class="text-[30px] font-bold">1111</div>
                                        <div class="text-[#999]">用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <div>
                    <el-card class="mt-[20px]">
                        <template #header>
                        <div class="flex w-full items-center">
                            <div>代办事项</div>
                            <el-button class="button ml-auto" text>添加</el-button>
                        </div>
                        </template>
                        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                    </el-card>
                </div>
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