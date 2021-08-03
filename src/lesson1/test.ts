type ThongTinCoBan = {
    hoTen:string,
    ngaySinh:Date,
    diaChi:string
};
type Sdt = {
    sdt:string
};
type Email = {
    email:string
};

type User = ThongTinCoBan & Sdt & Email;
let a1:User ={
    hoTen : 'Bui Xuan Thao',
    ngaySinh : new Date(),
    diaChi: 'Hoa Binh',
    sdt: '0855530125',
    email: 'thaobxph10183@fpt.edu.vn' 
}
