"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController_1 = require("./BaseController");
var routing_controllers_1 = require("routing-controllers");
var client_1 = require("@prisma/client");
var UserContoller = /** @class */ (function (_super) {
    __extends(UserContoller, _super);
    function UserContoller() {
        var _this = _super.call(this) // 상속 받은거여서 상위에 잇는 것 먼저 실행 시켜줘야 에러안남
         || this;
        _this.prisma = new client_1.PrismaClient();
        return _this;
    }
    UserContoller.prototype.index = function () {
        return this.prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                posts: true
            }
        });
        // return this.prisma.user.findMany(); // 전체 검색
    };
    UserContoller.prototype.create = function () {
        return this.prisma.user.create({
            data: {
                name: 'woowon',
                email: 'wwlee94@naver.com'
            }
        });
    };
    __decorate([
        routing_controllers_1.Get()
    ], UserContoller.prototype, "index", null);
    __decorate([
        routing_controllers_1.Post()
    ], UserContoller.prototype, "create", null);
    UserContoller = __decorate([
        routing_controllers_1.JsonController('/users')
    ], UserContoller);
    return UserContoller;
}(BaseController_1.BaseController));
exports.UserContoller = UserContoller;
