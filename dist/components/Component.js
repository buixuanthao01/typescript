var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.render = function () {
        /**
         * thêm dấu ! sau queryselector
         * => thông báo với ts:chắc chắn có 1 phần tử trên dom có id là root
         * &document.queryselector('#root') không bao giờ null
         */
        //hiển thị giao diện
        document.querySelector('#root').innerHTML = this.template();
        //xử lý
        // await this.afterRender();
    };
    return Component;
}());
export { Component };
