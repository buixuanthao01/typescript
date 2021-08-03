import { Component } from "../Component.js";
import { UserApi } from "../../api/UserApi.js";

export class UserEdit extends Component {
    private _id:string | undefined;
    public constructor(id:string | undefined){
        //gọi tới hàm khởi tạo của lớp cha  
        super();
    }
    public template(): string {
        return `
        <div class="col-10 offset-1 mt-5">
        <form action="" method="POST" id="form_create">
            <div class="row mt-4">
                <label class="col-2">Họ Tên</label>
                <input type="text" name="name" id="name" class="form-control col-10" />
            </div>
            <div class="row mt-4">
                <label class="col-2">Email</label>
                <input type="email" name="email" id="email" class="form-control col-10" />
            </div>
            <div class="row mt-4">
                <label class="col-2">Mật khẩu</label>
                <input type="password" name="password" id="password" class="form-control col-10" />
            </div>
            <div class="row mt-4">
                <label class="col-2">Xác nhận mật khẩu</label>
                <input type="password" name="password_confirm" id="password_confirm" class="form-control col-10" />
            </div>
            <div class="row mt-4">
                <label class="col-2">Ngày sinh</label>
                <input type="date" name="birthday" id="birthday" class="form-control col-10" />
            </div>
            <div class="row mt-4">
                <button class="btn btn-primary">Sửa</button>
                <a class="btn btn-default">Cancel</a>
            </div>
        </form>
    </div>
        `
    }
    public async afterRender() {
        if(typeof this._id !== 'undefined'){
            const response = await UserApi.find(this._id);
            const data = await response.json();
            
            console.log(data);
        }
    }
}