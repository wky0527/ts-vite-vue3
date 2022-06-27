import {RouteRecordRaw} from "vue-router";
const selectRoutes:Array<RouteRecordRaw> = [
    {
        path: '/best-select',
        name: '/best-select',
        component: () => import("@/views/BestSelect/best-select.vue")
    }
]
export default selectRoutes