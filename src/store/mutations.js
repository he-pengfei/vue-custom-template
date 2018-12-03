import * as types from './actionTypes';

export default{
    [types.Login](state, res) {
        console.log(res,"res")
        state.login = res
    }
}

