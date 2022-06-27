import Vuex from 'vuex';
import {homeStore} from "@/store/modules/home/index";
let storeModules = Object.assign({},homeStore,{
    modules: {

    }
})
export default new Vuex.Store(storeModules)