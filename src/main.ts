import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import '../src/assets/tailwind.css'
import 'element-plus/dist/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.mount('#app')
