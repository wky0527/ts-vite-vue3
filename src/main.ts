import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import {setupStore} from "@/store";
import {setupProdMockServer} from './mock'
import 'amfe-flexible';
import './utils/rem';
if(process.env.NODE_ENV === 'production'){
    setupProdMockServer()
}
const app = createApp(App)
app.use(router)
setupStore(app)
app.mount('#app')
//挂载全局属性
app.config.globalProperties.$axios = () => {

}