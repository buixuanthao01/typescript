import axios from 'axios';
import { Request } from './Request.js';
import { User } from '../model/User.js';
export class UserApi{
    public static all(){
        const url: string ="http://localhost:3000/users";
        return fetch(url,{method:"GET"});
    }
    public static find(id:string){
        const url: string =`http://localhost:3000/users/${id}`;
        return fetch(url,{method:"GET"});
    }
    public static insert(user: User){
        // const url: string = "http://localhost:3000/users";
        // return fetch(url,{
        //     method : POST,
        //     body:user
        // });
    }
}