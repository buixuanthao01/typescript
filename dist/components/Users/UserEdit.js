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
import { UserApi } from "../../api/UserApi.js";
var UserEdit = /** @class */ (function (_super) {
    __extends(UserEdit, _super);
    function UserEdit(id) {
        //g???i t???i h??m kh???i t???o c???a l???p cha  
        return _super.call(this) || this;
    }
    UserEdit.prototype.template = function () {
        return "\n        <div class=\"col-10 offset-1 mt-5\">\n        <form action=\"\" method=\"POST\" id=\"form_create\">\n            <div class=\"row mt-4\">\n                <label class=\"col-2\">H\u1ECD T\u00EAn</label>\n                <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control col-10\" />\n            </div>\n            <div class=\"row mt-4\">\n                <label class=\"col-2\">Email</label>\n                <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control col-10\" />\n            </div>\n            <div class=\"row mt-4\">\n                <label class=\"col-2\">M\u1EADt kh\u1EA9u</label>\n                <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control col-10\" />\n            </div>\n            <div class=\"row mt-4\">\n                <label class=\"col-2\">X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u</label>\n                <input type=\"password\" name=\"password_confirm\" id=\"password_confirm\" class=\"form-control col-10\" />\n            </div>\n            <div class=\"row mt-4\">\n                <label class=\"col-2\">Ng\u00E0y sinh</label>\n                <input type=\"date\" name=\"birthday\" id=\"birthday\" class=\"form-control col-10\" />\n            </div>\n            <div class=\"row mt-4\">\n                <button class=\"btn btn-primary\">S\u1EEDa</button>\n                <a class=\"btn btn-default\">Cancel</a>\n            </div>\n        </form>\n    </div>\n        ";
    };
    UserEdit.prototype.afterRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this._id !== 'undefined')) return [3 /*break*/, 3];
                        return [4 /*yield*/, UserApi.find(this._id)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserEdit;
}(Component));
export { UserEdit };
