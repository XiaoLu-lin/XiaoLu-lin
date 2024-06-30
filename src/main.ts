import { createApp } from 'vue'
// import 'ant-design-vue/dist/antd.css' // or 'ant-design-vue/dist/antd.less'
import './style.css'
import router from '~/config/router'
import App from './App.vue'
import { createPinia } from 'pinia'
// 2. 引入组件样式
import 'vant/lib/index.css'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
