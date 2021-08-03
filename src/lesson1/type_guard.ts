type SinhVien = {
    ho_ten:string;
    ma:string;
    diHoc:(monhoc:string) => void;
};
type NhanVien ={
    ho_ten:string;
    ma:string;
    lamViec:(congviec:string) => void;
};

type FptMember = SinhVien | NhanVien;

function dowork(member:FptMember){
    if('diHoc' in member){
        //typescript  hiểu member đang xét trong if là đối tượng kiểu sinh viên 
        member.diHoc('Lập trình typescript');
    }else{
        //typescript  hiểu member đang xét trong else là đối tượng kiểu nhân viên fpt
        member.lamViec('code typescript');
    }
}
//---------------------------------------------------------------------
//instanceof
class xemay{
    laixe(){
        console.log("lái xe máy");
    }
}

class xebus{
    muave(giatien:number){
        console.log(`mua vé hết ${giatien} VND`);
    }
}
type PhuongTienGiaoThong = xemay | xebus;
function thamgiagiaothong(phuongtien: PhuongTienGiaoThong){
    if(phuongtien instanceof xemay){
        phuongtien.laixe();
    }else{
        phuongtien.muave(3000);
    }
}
//---------------------------------------------------------------------
/*VD3 */
type Polystudent  = {
    type:'poly'; //literal type
    thuchanh:(congviec:string)=>void;
};
type Normalstudent = {
    type:'normal'; //literal type
    dihoc:(monhoc:string)=>void;
};

type HNStudent = Polystudent | Normalstudent;

function hoc(sv:HNStudent){
    if(sv.type === 'poly'){
        sv.thuchanh('Coding.....');
    }else{
        sv.dihoc('Môn chuyên ngành');
    }
}

const sv:Normalstudent = {
    type:'normal',
    dihoc:(monhoc:string)=>{
        console.log("Học " +monhoc);
    }
};
hoc(sv);