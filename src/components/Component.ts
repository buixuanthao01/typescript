
import { IComponent } from"./Icomponent.js";

export abstract class Component implements IComponent{
    public render(){
        /**
         * thêm dấu ! sau queryselector
         * => thông báo với ts:chắc chắn có 1 phần tử trên dom có id là root
         * &document.queryselector('#root') không bao giờ null
         */
        //hiển thị giao diện
        document.querySelector('#root')!.innerHTML =  this.template();
        //xử lý
        // await this.afterRender();
    }
    public abstract afterRender():void;
    public abstract template():string;
    
}
