import { createApp } from 'vue'
import App from './App.vue'
import styles from './style/style.scss'
import router from './router'

createApp(App).use(router).use(styles).mount('#app')
