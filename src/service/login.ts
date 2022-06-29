import service from '@/utils/axios';

interface ILogin {
    login: Function
}
const loginRequest:ILogin = function (){}
loginRequest.login = (params={}) =>{
    return service.post('/api/login',params)
}

export default  loginRequest