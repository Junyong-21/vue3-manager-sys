import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: () => import('../views/loginView.vue'),
		},
		{
			path: '/home',
			name: 'home',
			component: () => import('../views/HomeView.vue'),
			redirect: '/dashboard',
			children: [
				{
					path: '/dashboard',
					name: 'dashboard',
					meta: {
						title: '系统首页',
					},
					component: () => import('../views/dashboard.vue'),
				},
				{
					path: '/table',
					name: 'table',
					meta: {
						title: '表格',
					},
					component: () => import('../views/table.vue'),
				},
				{
					path: '/charts',
					name: 'charts',
					meta: {
						title: '图表',
					},
					component: () => import('../views/charts.vue'),
				},
				{
					path: '/form',
					name: 'form',
					meta: {
						title: '表单',
					},
					component: () => import('../views/form.vue'),
				},
				{
					path: '/tabs',
					name: 'tabs',
					meta: {
						title: 'tab标签',
					},
					component: () => import('../views/tabs.vue'),
				},
				{
					path: '/upload',
					name: 'upload',
					meta: {
						title: '上传文件',
					},
					component: () => import('../views/upload.vue'),
				},
				{
					path: '/user',
					name: 'user',
					meta: {
						title: '个人中心',
					},
					component: () => import('../views/user.vue'),
				},
				{
					path: '/editor',
					name: 'editor',
					meta: {
						title: '富文本编辑器',
					},
					component: () => import('../views/editor.vue'),
				},
				{
					path: '/markdown',
					name: 'markdown',
					meta: {
						title: 'markdown编辑器',
					},
					component: () => import('../views/markdown.vue'),
				},
				{
					path: '/exportExcel',
					name: 'exportExcel',
					meta: {
						title: '导出Excel',
					},
					component: () => import('../views/exportExcel.vue'),
				},
				{
					path: '/importExcel',
					name: 'importExcel',
					meta: {
						title: '导入Excel',
					},
					component: () => import('../views/importExcel.vue'),
				},
			],
		},
	],
});

export default router
