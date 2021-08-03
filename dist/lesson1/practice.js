"use strict";
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
