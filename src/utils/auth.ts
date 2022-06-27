import Cookies from 'js-cookie'

const token = 'backToken'

export function  getToken() {
    return Cookies.get(token)
}

export function  setToken() {
    return Cookies.set(token,token)
}

export function  removeToken() {
    return Cookies.remove(token)
}