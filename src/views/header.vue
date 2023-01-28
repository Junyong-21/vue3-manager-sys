<template>
<header class=" h-[70px] sticky top-0 flex backdrop-filter  backdrop-blur-md backdrop-contrast-100">
    <nav class="container flex text-6xl text-black py-6 items-center">
        <router-link to="/">
            <div class="flex items-center gap-6">
                <div class="w-1/12 h-1/12" >
                    <img src="../assets/logo.png" alt="">
                </div>
                <p>后台管理系统</p>
            </div>
        </router-link>
        <div class="flex flex-1 justify-end mr-8">
            <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <el-dropdown class="user-name" trigger="click" @command="handleCommand">
					<span class="text-white flex items-center ml-4">
						{{ username }}
						<i class="glyphicon glyphicon-menu-down ml-3"></i>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
								<el-dropdown-item>项目仓库</el-dropdown-item>
							</a>
							<el-dropdown-item command="user">个人中心</el-dropdown-item>
							<el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
        </div>
        
    </nav>
</header>
</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue'
import BaseModel from './BaseModel.vue'
import LoginView from './loginView.vue';
import { useRouter } from 'vue-router';

const username: String | null = localStorage.getItem('username');

const props = defineProps({
    name: String,
})

const router = useRouter();
const handleCommand = (command: String) => {
    if (command == 'loginout') {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        router.push('/')
    } else if (command == 'user') {
        router.push('/user')
    }
}
</script>