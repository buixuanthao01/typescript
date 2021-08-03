import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000/";

export class Request{
    public static get(options: object){
        return axios({
            methor:"GET",
            ...options 
        });
    }
    public static post(options: object){
        return axios({
            methor:"POST",
            ...options 
        });
    }
    public static put(options: object){
        return axios({
            methor:"PUT",
            ...options 
        });
    }
    public static delete(options: object){
        return axios({
            methor:"DELETE",
            ...options 
        });
    }
}