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
var PostContoller = /** @class */ (function (_super) {
    __extends(PostContoller, _super);
    function PostContoller() {
        var _this = _super.call(this) // 상속 받은거여서 상위에 잇는 것 먼저 실행 시켜줘야 에러안남
         || this;
        _this.prisma = new client_1.PrismaClient();
        return _this;
    }
    PostContoller.prototype.index = function () {
        return this.prisma.user.findOne({
            where: { id: 1 }
        }).posts();
    };
    PostContoller.prototype.create = function (
    // @BodyParam('title') title:string,
    // @BodyParam('authorId') authorId: number
    ) {
        return this.prisma.post.create({
            data: {
                title: '네번째 게시글입니다.',
                author: {
                    connect: {
                        id: 1
                    }
                }
            }
        });
    };
    __decorate([
        routing_controllers_1.Get()
    ], PostContoller.prototype, "index", null);
    __decorate([
        routing_controllers_1.Post()
    ], PostContoller.prototype, "create", null);
    PostContoller = __decorate([
        routing_controllers_1.JsonController('/posts')
    ], PostContoller);
    return PostContoller;
}(BaseController_1.BaseController));
exports.PostContoller = PostContoller;
