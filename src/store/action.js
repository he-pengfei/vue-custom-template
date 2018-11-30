import requestType from "../middleware/classRequest";
import * as types from './actionTypes';

function pubilc(method, url, data){



}

export const login = ({ commit }, data)=>{
    let point = "/travel/"
    return  pubilc("POST", point, data)

}