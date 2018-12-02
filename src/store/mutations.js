import * as types from './actionTypes';
export  const mutations = {
    [types.Login](state, res) {  
        console.log(res,"8888888888888888888")      
        state.state.login = res
    }
}
