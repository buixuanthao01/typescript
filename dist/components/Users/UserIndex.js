var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component } from "../Component.js";
import { User } from "../../model/User.js";
import { UserApi } from "../../api/UserApi.js";
var UserIndex = /** @class */ (function (_super) {
    __extends(UserIndex, _super);
    function UserIndex() {
        var _this = _super.call(this) || this;
        _this.listUser = [];
        _this.fakeData();
        return _this;
    }
    UserIndex.prototype.fakeData = function () {
        var u1 = new User(1, "Ng Van A", "anvph1@fpt.edu.vn", "123456", new Date()), u2 = new User(2, "Ng Van B", "bnvph1@fpt.edu.vn", "123456", new Date()), u3 = new User(3, "Ng Van C", "cnvph1@fpt.edu.vn", "123456", new Date());
        this.listUser.push(u1);
        this.listUser.push(u2);
        this.listUser.push(u3);
    };
    UserIndex.prototype.template = function () {
        return "\n            <div class=\"col-10 offset-1 mt-5\">\n                <div class=\"row\">\n                    <div class=\"col-6\">\n                        <a class=\"btn btn-success\" href=\"/users/create\" data-navigo>Create</a>\n                    </div>\n                    <div class=\"col-6\"></div>\n                </div>\n                <table class=\"table table-dark mt-4\">\n                    <thead>\n                        <tr>\n                            <td>Id</td>\n                            <td>H\u1ECD t\u00EAn</td>\n                            <td>Email</td>\n                            <td>Ng\u00E0y sinh</td>\n                            <td colspan=\"2\">Thao t\u00E1c</td>\n                        </tr>\n                    </thead>\n                    <tbody id=\"tbl_users\"></tbody>\n                </table>\n            </div>\n        ";
    };
    UserIndex.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, tbodyContents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UserApi.all()];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        tbodyContents = data.map(function (value, key) {
                            return "\n                <tr>\n                    <td>" + value.id + "</td>\n                    <td>" + value.name + "</td>\n                    <td>" + value.email + "</td>\n                    <td>" + value.birthday + "</td>\n                    <td>\n                        <a class=\"btn btn-primary\" href=\"/users/edit/" + value.id + "\" data-navigo >\n                            Update\n                        </a>\n                    </td>\n                    <td>\n                        <button class=\"btn btn-danger\">\n                            Delete\n                        </button>\n                    </td>\n                </tr>\n            ";
                        }).join('');
                        // Event Delegation
                        document.getElementById('tbl_users').innerHTML = tbodyContents;
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserIndex;
}(Component));
export { UserIndex };
