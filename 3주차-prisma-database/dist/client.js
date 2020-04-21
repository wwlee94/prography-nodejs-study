"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
//upsert -> 없으면 생성 있으면 갱신
prisma.todo.create({
    data: {
        title: 'New todo item! - 2',
        description: 'todo'
    }
}).then(function (res) {
    console.log(res);
});
