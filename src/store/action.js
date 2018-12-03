import requestType from "../middleware/classRequest";
import * as types from './actionTypes';

function pubilc(method, url, data){
    if(method==="POST"){

     return   requestType.post(url, data)
        
    }else{

      return   requestType.get(url)
    }
}

export default{
    async reqLogin ({ commit }, data){   //登录
        let point = ""
        commit(types.Login, await pubilc("POST", point, data))

    }




}
