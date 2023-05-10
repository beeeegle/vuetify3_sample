/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Add
import router from "./router"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './assets/styles/styles.css'; // ここを追加

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

registerPlugins(app)

app.use(pinia).use(router).mount('#app')
