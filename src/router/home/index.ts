import {RouteRecordRaw} from "vue-router";
const homeRoutes:Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: '/home',
        component: () => import("@/views/Home/home.vue")
    }
]
export default homeRoutes