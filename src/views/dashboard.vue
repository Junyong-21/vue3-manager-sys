<template>
    <div>
        <el-row :gutter="20" class="mb-[20px]">
            <el-col :span="8">
                <el-card shadow="hover" class="h-[283px] mb-[20px]">
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
                            <el-button class="button ml-auto" text @click="addItem">添加</el-button>
                        </div>
                        </template>
                        <el-table :show-header="false" :data="todoList" class="w-full" max-height="322" ref="table">
                            <el-table-column width="40">
                                <template #default="scope">
                                    <el-checkbox v-model="scope.row.status"></el-checkbox>
                                </template>
                            </el-table-column>
                            <el-table-column>
                                <template #default="scope">
                                    <div
                                        class="todo-item"
                                        :class="{
                                            'line-through': scope.row.status
                                        }"
                                    >
                                        {{ scope.row.title }}
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card shadow="hover">
                    <div id="GoodsChart" class="w-full h-[300px]"></div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card shadow="hover">
                    <div id="salesCharts" class="w-full h-[300px]"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang='ts'>
import { ref,reactive,onMounted } from 'vue'
import * as echarts from 'echarts';

const username: String | null = localStorage.getItem('username');

const props = defineProps<{
    currentDate?: string,
    currentLocaltion?: string,
}>()

// 代办事件列表
let todoList = reactive([
	{
		title: '今天要修复100个bug',
		status: false
	},
	{
		title: '今天要修复100个bug',
		status: false
	},
	{
		title: '今天要写100行代码加几个bug吧',
		status: false
	},
	{
		title: '今天要修复100个bug',
		status: false
	},
	{
		title: '今天要修复100个bug',
		status: true
	},
	{
		title: '今天要写100行代码加几个bug吧',
		status: true
	},
])

// 代办事件添加功能
const addItem = () => {
    todoList.push({
		title: '今天要写几百行代码加几个bug吧',
		status: false
	})
}

onMounted(() => {
    let GoodsChart = echarts.init(document.getElementById("GoodsChart") as HTMLElement);
    let GoodsOption = {
        title: {
            text: 'Drink',
            left: 'center'
        },
        // 图例样式
        legend: {
            bottom: 10,
        },
        // 提示框
        tooltip: {},
        dataset: {
            // 提供一份数据。
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte', 43.3, 85.8, 93.7],
                ['Milk Tea', 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 86.4, 65.2, 82.5],
                ['Walnut Brownie', 72.4, 53.9, 39.1]
            ]
        },
        // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
        xAxis: { 
            type: 'category',
            axisLabel:{
                interval:0,//横轴信息全部显示
			}
        },
        // 声明一个 Y 轴，数值轴。
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
    };
GoodsChart.setOption(GoodsOption);
    let salesChart = echarts.init(document.getElementById('salesCharts') as HTMLElement);
    let salesOptions = {
        title: {
            text: '最近几个月销售趋势图',
            left: 'center'
        },
         // 图例样式
        legend: {
            bottom: 10,
        },
        // 提示框
        tooltip: {},
        dataset: {
            // 提供一份数据。
            source: [
                ['legend', '家电', '百货', '食品'],
                ['6月', '7月', '8月', '9月', '10月'],
                ['6月', 234, 164, 178],
                ['7月', 278, 178, 118],
                ['8月', 270, 150, 200],
                ['9月', 190, 135, 235],
                ['10月', 230, 160, 90],
            ]
        },
        xAxis: {
            type: 'category',
            axisLabel:{
                interval:0,//横轴信息全部显示
			}
        },
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [{ type: 'line' }, { type: 'line' }, { type: 'line' }]
    }
    salesChart.setOption(salesOptions)
window.onresize = function () { // 自适应大小
    GoodsChart.resize();
    salesChart.resize();
};
})

</script>
<style scoped>

</style>