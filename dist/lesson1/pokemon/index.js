"use strict";
// type Pokemon = {
//     id:number,
//     name:string,
//     image:string,
//     type:string,
// }
// const makePokemon = (id:number,name:string,image:string,type:string):Pokemon =>{
//     const pokemon= {
//         id,
//         name,
//         image,
//         type,
//     };
//     return pokemon;
// }
// const url = 'https://pokeapi.co/api/v2/pokemon?limit=5';
// const renderListPokemon = (listData: [])=>{
//     let listPokemon = [];
//     listData.forEach(async(val:{name:string, url:string},key) =>{
//         const Response = await fetch(val.url);
//     })
// }
// const fecthListPokemon = asyns (callback: function) => {
//     const Response = await fetch(url);
//     const data = await Response.json();
//     listPokemon = data.result
// }
// // fetch(url)
// //     .then(Response =>Response.json())
// //     .then(data =>{
// //         listPokemon = data.result
// //     })
