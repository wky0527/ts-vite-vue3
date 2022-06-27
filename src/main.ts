import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import {setupProdMockServer} from './mock'
import 'amfe-flexible';
import './utils/rem';
import store from './store'
if(process.env.NODE_ENV === 'production'){
    setupProdMockServer()
}
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
