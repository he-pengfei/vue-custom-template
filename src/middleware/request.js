const HTTP = "http://192.168.0.41:9999/";
import axios from 'axios'
export function fetch(method, url , params){

    console.log(method,"url")
    let requestURl = HTTP + url;
    let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    let Json = {
        url: requestURl,
        method: method,
        header: header,
        data: method === "POST" ? JSON.stringify(params):{}
    }

    return new Promise((resolve, reject)=>{
        resolve({id:"123",name:"xiaofeifei"})

        // axios(Json).then(res=>{
        //     resolve(res.data)
        // }).catch(error=>{
        //     reject(error)
        // })

    })
}
