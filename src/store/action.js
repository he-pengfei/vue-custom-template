import requestType from "../middleware/classRequest";
import * as types from './actionTypes';

function pubilc(method, url, data){
    if(method==="POST"){

     return   requestType.post(method,url, data)
        
    }else{

     return   requestType.get(method,url)
    }
}

 export const  login = async ({ commit }, data)=>{
   console.log(data,"data")

    return
    let point = "/travel/"
    commit([types.Login],await pubilc("POST", point, data))
    
};