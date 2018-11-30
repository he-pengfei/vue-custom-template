import {fetch} from "./request";

class requestType {
    
    static post(url,data){
        return fetch("POST", url, data)
    }

    static get(url) {
        return fetch("GET", url)
    }

}

export default requestType;