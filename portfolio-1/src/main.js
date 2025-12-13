import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import three from './stores/three'


const app = createApp(App)

app.use(createPinia())
app.use(router)
// three initalized
app.use(three);


app.mount('#app')
