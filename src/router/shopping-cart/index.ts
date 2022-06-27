import {RouteRecordRaw} from "vue-router";
const cartRoutes:Array<RouteRecordRaw> = [
    {
        path: '/shopping-cart',
        name: '/shopping-cart',
        component: () => import("@/views/ShoppingCart/shopping-cart.vue")
    }
]
export default cartRoutes