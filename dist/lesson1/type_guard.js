"use strict";
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
