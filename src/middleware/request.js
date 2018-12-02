const HTTP = "http://";
import axios from 'axios'
export function fetch(method, url, params){
    let requestURl = HTTP + url;
    let header = {
        'Accept': 'application/json;charset=UTF-8',
        'Content-Type': 'application/json'
    }
    let Json = {
        url: requestURl,
        method: method,
        header: header,
        data: method === "POST" ? JSON.stringify(params):{}
    }
    return new Promise((resolve, reject)=>{
        resolve(123)

        // axios(Json).then(res=>{
        //     resolve(res)
        // }).catch(error=>{
        //     reject(error)
        // })

    })
}
