import { UserCreate} from"./components/Users/UserCreate.js";
import { UserEdit } from "./components/Users/UserEdit.js";
import { Component } from "./components/Component.js";
import { UserIndex } from "./components/Users/UserIndex.js";
// import Navigo from 'Navigo';

// router
// const render = async ()=> {
//     let gui: Component = new UserIndex();
//     await gui.render();
//     await gui.afterRender();
// };

// render();
declare const window:any;
type Route = {
    name: string;
    path: string | RegExp;
  };
type Match = {
    url: string;
    queryString: string;
    hashString: string;
    route: Route;
    data: { [key: string]: string } | null;
    params: { [key: string]: string } | null;
  };

const routes = () =>{
    window.router
    .on('/users/index',async ()=>{
        const gui:Component = new UserIndex();
        await gui.render();
        gui.afterRender();
    })
    .on('/users/create',()=>{
        const gui:Component = new UserCreate();
        gui.render();
    })
    .on('/users/edit/:id',(params: Match)=>{
       
        const id = params?.data?.id;
        const gui:Component = new UserEdit(id);
        gui.render();
    })
    .resolve();
}
routes();