import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/css/app.css'
import VueGtag from 'vue-gtag-next'
import { plugin, defaultConfig } from '@formkit/vue'
import uniqueEmail from './lib/rules/uniqueEmail'
import siteSlug from './lib/rules/siteSlug'
import Markdown from 'vue3-markdown-it'
import { createAutoHeightTextareaPlugin } from '@formkit/addons'

const app = createApp(App)

app.use(VueGtag, {
  property: {
    id: 'G-D9ND06XRQK'
  }
})

app.use(plugin, defaultConfig({
  rules: { uniqueEmail, siteSlug },
  plugins: [
    createAutoHeightTextareaPlugin()
  ]
}))

app.use(Markdown)

app.use(createPinia()).use(router).mount('#app')
