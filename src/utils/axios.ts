import axios, {AxiosResponse} from 'axios';
import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {useUserState} from "@/store/modules/user";
import {Toast} from 'vant';
import {useRouter} from "vue-router";
import {removeToken} from "@/utils/auth";
// export const createAxios = ( config?:AxiosRequestConfig) => {
//     const instance = axios.create({
//         baseURL: import.meta.env.VITE_BASE_API,
//         timeout: 1000, //超时配置
//         withCredentials: true,//跨域携带cookie
//         ...config //自定义配置
//     })
//     //请求拦截
//     instance.interceptors.request.use(
//         function (config: any) {
//            if(config.method === 'post'){
//                // config.data = Qs.stringify(config.data)
//                config.headers['Content-Type'] = 'application/x-wwww-form-urlencoded'
//            }
//             return config
//         },
//         function (error) {
//             return Promise.reject(error)
//         }
//     )
//     //响应拦截
//     instance.interceptors.response.use(
//        function (res) {
//            const  {data,message,code} = res.data
//            console.log(message)
//            return data
//        }
//     )
// }
// export default createAxios
// class AxiosRequest {
//     instance: AxiosInstance
//     constructor(config: AxiosRequestConfig) {
//         this.instance = axios.create(config)
//         this.instance.interceptors.request.use((config) => {
//                 // const token = store.state.token
//                 return config
//             }, error => {
//                 return Promise.reject(error)
//             }
//         )
//         this.instance.interceptors.response.use((res) => {
//                 const {data,code,message} = res.data;
//                 if(code === 200) {
//                     Notify({ type: 'success', message: '请求接口成功'});
//                     return  Promise.resolve(res)
//                 }
//             }, error => {
//                 console.log(error)
//                 // switch (code){
//                 //     case 401:
//                 //         //未登录 跳转
//                 //         break;
//                 //     case 403:
//                 //         //token过期
//                 //     case 404:
//                 //     case 500:
//                 //
//                 // }
//                 return Promise.reject(error)
//             }
//         )
//     }
//     //Promise的泛型T代表promise变成成功态之后resolve的值，resolve(value)
//     request<T>(config: AxiosRequestConfig):Promise<T> {
//         return new Promise((resolve,reject)=>{
//             // console.log(this.instance.request)
//             this.instance.request<any,T>(config).then(res=>{
//                 debugger
//                 console.log(res)
//                 resolve(res)
//             }).catch(err=>{
//                 reject(err)
//             })
//         })
//     }
//
//
//     get<T>(config: AxiosRequestConfig): Promise<T> {
//         return this.request<T>({ ...config, method: 'GET' })
//     }
//     post<T>(config:AxiosRequestConfig): Promise<T> {
//         return this.request<T>({...config,method: 'POST'})
//     }
//     update<T>(config:AxiosRequestConfig): Promise<T> {
//         return this.request<T>({...config,method: "PUT"})
//     }
//     delete<T>(config:AxiosRequestConfig): Promise<T> {
//         return this.request<T>({...config,method: 'DELETE'})
//     }
// }
// const commonRequest = new AxiosRequest({
//     baseURL: './',
//     timeout: 5000,
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//     }
// })

const service = axios.create({
    baseURL: './',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})
interface BaseResponse<T> {
    code: number,
    data: T,
    msg: string
}
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    hideLoading?: boolean;
}
service.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
        // 不传递默认开启loading
        if (!config.hideLoading) {
            // loading
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
            });
        }
        const userStore = useUserState();
        console.log(userStore, "store.getters['user']");
        if (userStore.token && config.headers) {
            config.headers['X-Token'] = userStore.token;
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);
// respone拦截器
service.interceptors.response.use(
    (response) => {
        return Promise.resolve(response);
    },
    (error) => {
            switch (error.code) {
                case 400:
                    Toast('错误的请求，请刷新后尝试！')
                    break;
                case 403:
                    Toast('您无法访问此资源')
                    break;
                case 404:
                    Toast('页面找不到')
                case 401:
                    if (error.config.url.indexOf('login') > 0) {
                        Toast('用户没有访问权限')
                    } else {
                        Toast('您的登录状态已失效，即将为您跳转登录页面');
                        const router = useRouter();
                        removeToken();
                        router.push({'name': 'login'});
                    }
                    break;
        }
        console.log('err' + error); // for debug
        return Promise.reject(error);
    },
);

export default service