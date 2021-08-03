type Ten_GT = string | 0| 1;
const loger = (info:Ten_GT)=>{
    if(typeof info =='string'){
        console.log('Họ tên' + info);
    }else if(info=1){
        console.log("giới tính nam")
    }else(
        console.log("giới tính nữ")
    )
}
loger('Thaobx')