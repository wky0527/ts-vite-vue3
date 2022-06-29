import {createPinia} from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist'; //数据持久化功能
 const store = createPinia();
export function setupStore(app){
    app.use(store)
}
store.use(piniaPluginPersist)
export {store}