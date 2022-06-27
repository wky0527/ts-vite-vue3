import axios, {AxiosResponse} from 'axios';
import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {Notify} from 'vant';
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
class AxiosRequest {
    instance: AxiosInstance
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        this.instance.interceptors.request.use((config) => {
                // const token = store.state.token
                return config
            }, error => {
                return Promise.reject(error)
            }
        )
        this.instance.interceptors.response.use((res) => {
                const {data,code,message} = res.data;
                if(code === 200) {
                    Notify({ type: 'success', message: '请求接口成功'});
                    return  Promise.resolve(res)
                }
            }, error => {
                const {code} = error.data
                switch (code){
                    case 401:
                        //未登录 跳转
                        break;
                    case 403:
                        //token过期
                    case 404:
                    case 500:

                }
                return Promise.reject(error)
            }
        )
    }
    //Promise的泛型T代表promise变成成功态之后resolve的值，resolve(value)
    request<T>(config: AxiosRequestConfig):Promise<T> {
        return new Promise((resolve,reject)=>{
            this.instance.request<any,T>(config).then(res=>{
                resolve(res)
            }).then(err=>{
                reject(err)
            })
        })
    }


    get<T>(config: AxiosRequestConfig): Promise<T> {
        return this.request<T>({ ...config, method: 'GET' })
    }
    post<T>(config:AxiosRequestConfig): Promise<T> {
        return this.request<T>({...config,method: 'POST'})
    }
    update<T>(config:AxiosRequestConfig): Promise<T> {
        return this.request<T>({...config,method: "PUT"})
    }
    delete<T>(config:AxiosRequestConfig): Promise<T> {
        return this.request<T>({...config,method: 'DELETE'})
    }
}
const commonRequest = new AxiosRequest({
    baseURL: './',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
})
export default commonRequest

