import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import 'uno.css'
import './uni.scss'
import './static/iconfont/iconfont.css'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  app.use(pinia)
  return { app }
}
