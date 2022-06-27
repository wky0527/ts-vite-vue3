import {RouteRecordRaw} from "vue-router";
const loginRoutes:Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: '/login',
        component: () => import("@/views/Login/login.vue")
    }
]
export default loginRoutes