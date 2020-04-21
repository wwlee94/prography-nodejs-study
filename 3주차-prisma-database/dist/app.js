"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routing_controllers_1 = require("routing-controllers");
var app = express_1.default();
exports.app = app;
routing_controllers_1.useExpressServer(app, {
    controllers: [__dirname + "/controllers/**"]
});
