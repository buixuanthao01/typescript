//Untion type
type Combinable = string | number ;
type Numeric = number | boolean;

//intersection type
type Universal = Combinable | Numeric;


// let a1:Universal = 'Thaobx';
// let b1:Universal = true;
let c1:Universal = 1;

type sinhvien = {
    name:string;
    maSV:string;
};
type nhanvien = {
    name:string;
    ngaybatdau:Date;
};
//intersection type > | < union type
type thuctapsinh = sinhvien & nhanvien;
let x:thuctapsinh = {
    name:'Bui Xuan Thao',
    maSV:'PH10183',
    ngaybatdau:new Date()
};