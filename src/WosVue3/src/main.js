import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
const app = createApp(App)
import mitt from 'mitt'
app.config.globalProperties.$mitt = new mitt();

// 本地SVG图标
import "virtual:svg-icons-register";
import "@/styles/index.scss";
// import '@/assets/icons/iconfont/iconfont.css'

app.use(createPinia())
app.use(router)
app.mount('#app')

