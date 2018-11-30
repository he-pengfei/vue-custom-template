import * as types from './actionTypes';
export const mutations = {
    [types.Login](state, res) {
        state.login = res
    }
}
