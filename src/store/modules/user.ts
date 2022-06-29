import {defineStore} from "pinia";
import loginRequest from "@/service/login";
interface Iuser {
    token: string,
    name: string,
    avatar: string
}
export const useUserState = defineStore({
        id: 'user',
        state: ():Iuser => {
            return {
                token:'',
                name: '',
                avatar:''
            }
        },
        getters: {
         getToken(): string {
             return  this.token
         },
         getName(): string {
             return  this.name
         }
        },
        actions: {
            //清空token及用户信息
            resetToken() {
                this.token = this.name = ''
            },
            //登录成功保存token
            setToken(token: string) {
              this.token = token ?? ''
            },
            async login({username,password}){
              try {
                  const {data:{access_token}} = await loginRequest.login(username,password)
                  this.setToken(access_token)
              }catch (error){

              }
            }
        },
      // 开启数据缓存 默认放sessionStorage
        persist: {
            enabled: true,
            strategies: [
                {
                    key: 'my_user',
                    storage: localStorage,
                    paths: ['token'] //持久化字段
                }
            ]
        }
    }
)