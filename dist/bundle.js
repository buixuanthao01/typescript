"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// router
var gui = new UserCreate();
gui.render();
///<reference path="./../Component.ts">
///<reference path="./../../model/User.ts">
var App;
(function (App) {
    var UserCreate = /** @class */ (function (_super) {
        __extends(UserCreate, _super);
        function UserCreate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UserCreate.prototype.template = function () {
            return "\n            <div class=\"col-10 offset-1 mt-5\">\n                <form action=\"\" method=\"POST\" id=\"form_create\">\n                    <div class=\"row mt-4\">\n                        <label class=\"col-2\">H\u1ECD T\u00EAn</label>\n                        <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control col-10\" />\n                    </div>\n                    <div class=\"row mt-4\">\n                        <label class=\"col-2\">Email</label>\n                        <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control col-10\" />\n                    </div>\n                    <div class=\"row mt-4\">\n                        <label class=\"col-2\">M\u1EADt kh\u1EA9u</label>\n                        <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control col-10\" />\n                    </div>\n                    <div class=\"row mt-4\">\n                        <label class=\"col-2\">X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u</label>\n                        <input type=\"password\" name=\"password_confirm\" id=\"password_confirm\" class=\"form-control col-10\" />\n                    </div>\n                    <div class=\"row mt-4\">\n                        <label class=\"col-2\">Ng\u00E0y sinh</label>\n                        <input type=\"date\" name=\"birthday\" id=\"birthday\" class=\"form-control col-10\" />\n                    </div>\n                    <div class=\"row mt-4\">\n                        <button class=\"btn btn-primary\">Create</button>\n                        <a class=\"btn btn-default\">Cancel</a>\n                    </div>\n                </form>\n            </div>\n        ";
        };
        UserCreate.prototype.afterRender = function () {
            document.getElementById('form_create')
                .addEventListener('submit', function (event) {
                event.preventDefault();
                // Type Casting:
                // const inputName = <HTMLInputElement> document.getElementById("name"); /* C1 */
                var inputName = document.getElementById("name"); /* C2 */
                var name = inputName.value;
                var email = document.getElementById("email").value;
                var password = document.getElementById("password").value;
                var password_confirm = document.getElementById("password_confirm").value;
                var birthdayStr = document.getElementById("birthday").value;
                var birthday = new Date(birthdayStr);
                if (password !== password_confirm) {
                    // doSomething ...
                }
                var user = new User(0, name, email, password, birthday);
            });
        };
        return UserCreate;
    }(Component));
    App.UserCreate = UserCreate;
})(App || (App = {}));
var combine1 = function (a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else if (typeof a == 'string' && typeof b == 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a && b;
    }
};
console.log(combine1(1, 2));
console.log(combine1('1', '2'));
console.log(combine1('FPT', 'Polytechnic'));
console.log(combine1(true, false));
var VATCalculator = /** @class */ (function () {
    function VATCalculator() {
    }
    VATCalculator.prototype.calculate = function (amount) {
        return amount * 1.25;
    };
    return VATCalculator;
}());
var vat = new VATCalculator();
console.log(vat.calculate(100));
var xulythongtin;
xulythongtin = function (info) {
    if (typeof info == 'string') {
        console.log('Họ tên' + info);
    }
    else if (info = 1) {
        console.log("giới tính nam");
    }
    else
        (console.log("giới tính nữ"));
};
var printInfo = function (a) {
    console.log(a);
};
var main = function (callback) {
    callback(1);
};
main(printInfo);
var a, b;
a = 1;
b = 2;
var add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(a, b));
// let a1:Universal = 'Thaobx';
// let b1:Universal = true;
var c1 = 1;
var x = {
    name: 'Bui Xuan Thao',
    maSV: 'PH10183',
    ngaybatdau: new Date()
};
var combine2 = function (a, b, typeAs //literal type
) {
    if ((typeof a == 'number' && typeof b == 'number') ||
        typeAs == 'as-number') {
        return (+a) + (+b);
    }
    else if ((typeof a == 'string' && typeof b == 'string') ||
        typeAs == 'as-string') {
        return a.toString() + b.toString();
    }
    else {
        return a && b;
    }
};
console.log(combine2(1, 2, 'as-number'));
console.log(combine2('1', '2', 'as-number'));
console.log(combine2('FPT', 'Polytechnic', 'as-string'));
console.log(combine2(true, false, 'as-string'));
var loger = function (info) {
    if (typeof info == 'string') {
        console.log('Họ tên' + info);
    }
    else if (info = 1) {
        console.log("giới tính nam");
    }
    else
        (console.log("giới tính nữ"));
};
loger('Thaobx');
var a1 = {
    hoTen: 'Bui Xuan Thao',
    ngaySinh: new Date(),
    diaChi: 'Hoa Binh',
    sdt: '0855530125',
    email: 'thaobxph10183@fpt.edu.vn'
};
function dowork(member) {
    if ('diHoc' in member) {
        //typescript  hiểu member đang xét trong if là đối tượng kiểu sinh viên 
        member.diHoc('Lập trình typescript');
    }
    else {
        //typescript  hiểu member đang xét trong else là đối tượng kiểu nhân viên fpt
        member.lamViec('code typescript');
    }
}
//---------------------------------------------------------------------
//instanceof
var xemay = /** @class */ (function () {
    function xemay() {
    }
    xemay.prototype.laixe = function () {
        console.log("lái xe máy");
    };
    return xemay;
}());
var xebus = /** @class */ (function () {
    function xebus() {
    }
    xebus.prototype.muave = function (giatien) {
        console.log("mua v\u00E9 h\u1EBFt " + giatien + " VND");
    };
    return xebus;
}());
function thamgiagiaothong(phuongtien) {
    if (phuongtien instanceof xemay) {
        phuongtien.laixe();
    }
    else {
        phuongtien.muave(3000);
    }
}
function hoc(sv) {
    if (sv.type === 'poly') {
        sv.thuchanh('Coding.....');
    }
    else {
        sv.dihoc('Môn chuyên ngành');
    }
}
var sv = {
    type: 'normal',
    dihoc: function (monhoc) {
        console.log("Học " + monhoc);
    }
};
hoc(sv);
//union type: number | string | boolean
var combine = function (a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else if (typeof a == 'string' && typeof b == 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a && b;
    }
};
console.log(combine(1, 2));
console.log(combine('1', '2'));
console.log(combine('FPT', 'Polytechnic'));
console.log(combine(true, false));
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
