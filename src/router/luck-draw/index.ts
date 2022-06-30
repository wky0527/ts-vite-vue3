import {RouteRecordRaw} from "vue-router";
const homeRoutes:Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/luck-draw'
    },
    {
        path: '/luck-draw',
        name: '/luck-draw',
        meta: {
          title: ''
        },
        component: () => import("@/views/LuckDraw/luck-draw.vue")
    }
]
export default homeRoutes