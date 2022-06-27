import * as types from './mutation-types'
export default {
    [types.SET_HOME](state,data) {
        state.info = data
    }
}