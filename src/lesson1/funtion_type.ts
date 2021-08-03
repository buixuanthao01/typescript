type TenGT = string | 0| 1;
let xulythongtin: Function;
xulythongtin = (info:TenGT)=>{
    if(typeof info =='string'){
        console.log('Họ tên' + info);
    }else if(info=1){
        console.log("giới tính nam")
    }else(
        console.log("giới tính nữ")
    )
}
let printInfo: Function = (a: string) =>{
    console.log(a);
} 
const main = (callback: Function) =>{
    callback(1);
}
main(printInfo);
