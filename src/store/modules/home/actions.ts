import homeRequest from '@/service/home';
import * as types from './mutation-types';
export default {
    _getHomeInfo({commit,state}, params) {
        homeRequest.index().then(res=>{
            commit(types.SET_HOME,res.data)
        })
    }
}