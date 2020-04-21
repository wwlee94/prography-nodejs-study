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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController_1 = require("./BaseController");
var routing_controllers_1 = require("routing-controllers");
var client_1 = require("@prisma/client");
var TodoContoller = /** @class */ (function (_super) {
    __extends(TodoContoller, _super);
    function TodoContoller() {
        var _this = _super.call(this) // 상속 받은거여서 상위에 잇는 것 먼저 실행 시켜줘야 에러안남
         || this;
        _this.prisma = new client_1.PrismaClient();
        return _this;
    }
    TodoContoller.prototype.index = function () {
        return this.prisma.todo.findMany();
    };
    TodoContoller.prototype.create = function (title, description) {
        return this.prisma.todo.create({
            data: {
                title: title,
                description: description
            }
        });
    };
    __decorate([
        routing_controllers_1.Get()
    ], TodoContoller.prototype, "index", null);
    __decorate([
        routing_controllers_1.Post(),
        __param(0, routing_controllers_1.BodyParam('title')),
        __param(1, routing_controllers_1.BodyParam('description'))
    ], TodoContoller.prototype, "create", null);
    TodoContoller = __decorate([
        routing_controllers_1.JsonController('/todos')
    ], TodoContoller);
    return TodoContoller;
}(BaseController_1.BaseController));
exports.TodoContoller = TodoContoller;
