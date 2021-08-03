"use strict";
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
