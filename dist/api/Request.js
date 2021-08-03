var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:3000/";
var Request = /** @class */ (function () {
    function Request() {
    }
    Request.get = function (options) {
        return axios(__assign({ methor: "GET" }, options));
    };
    Request.post = function (options) {
        return axios(__assign({ methor: "POST" }, options));
    };
    Request.put = function (options) {
        return axios(__assign({ methor: "PUT" }, options));
    };
    Request.delete = function (options) {
        return axios(__assign({ methor: "DELETE" }, options));
    };
    return Request;
}());
export { Request };
