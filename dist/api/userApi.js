var UserApi = /** @class */ (function () {
    function UserApi() {
    }
    UserApi.all = function () {
        var url = "http://localhost:3000/users";
        return fetch(url, { method: "GET" });
    };
    UserApi.find = function (id) {
        var url = "http://localhost:3000/users/" + id;
        return fetch(url, { method: "GET" });
    };
    UserApi.insert = function (user) {
        // const url: string = "http://localhost:3000/users";
        // return fetch(url,{
        //     method : POST,
        //     body:user
        // });
    };
    return UserApi;
}());
export { UserApi };
