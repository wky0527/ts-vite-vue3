import {MockMethod} from "vite-plugin-mock";
export default [
    {
        url: `/api/getUserInfo/0`,
        method: 'get',
        response: () => {
            return {
                data: 'hello world',
                code: 200,
                message: '请求成功'
            }
        }
    },
    {
        url: '/api/login',
        method: 'post',
        response: () => {
            return '登录成功'
        }
    }
] as MockMethod[]