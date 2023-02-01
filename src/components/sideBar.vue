<template>
<div class="w-[200px] absolute top-[70px] left-0 bottom-0 backdrop-filter  backdrop-blur-md backdrop-contrast-100">
    <el-menu
        active-text-color="#20a0ff"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        text-color="white"
        background-color="backdrop-filter"
        router
    >
        <el-menu-item index="/dashboard">
        <span>系统首页</span>
        </el-menu-item>
        <el-sub-menu index="2">
        <template #title>
            <span>表格相关</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="/table">常用表格</el-menu-item>
            <el-menu-item index="/importExcel">导入Excel</el-menu-item>
            <el-menu-item index="/exportExcel">导出Excel</el-menu-item>
        </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="/tabs">
        <span>tab选项卡</span>
        </el-menu-item>
        <el-sub-menu index="4">
        <template #title>
            <span>表单相关</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="/form">基本表单</el-menu-item>
            <el-menu-item index="/upload">文件上传</el-menu-item>
            <el-sub-menu index="4-3">
                <template #title>三级菜单</template>
                    <el-menu-item index="/editor">富文本编辑器</el-menu-item>
                    <el-menu-item index="/markdown">markdown编辑器</el-menu-item>
                </el-sub-menu>
        </el-menu-item-group>
        </el-sub-menu>
    </el-menu>
</div>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>