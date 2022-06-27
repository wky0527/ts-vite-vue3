import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";
import BestSelect from "@/router/best-select/index";
import Home from "@/router/home/index";
import My from "@/router/my/index";
import ShoppingCart from "@/router/shopping-cart/index";
import Login from '@/router/login/index';
const arrObj = new Array()
const routes = arrObj.concat(Login,BestSelect,Home,My,ShoppingCart)
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default  router