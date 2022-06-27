import {RouteRecordRaw} from "vue-router";
const myRoutes:Array<RouteRecordRaw> = [
    {
        path: '/my',
        name: '/my',
        component: () => import("@/views/My/my.vue")
    }
]
export default myRoutes