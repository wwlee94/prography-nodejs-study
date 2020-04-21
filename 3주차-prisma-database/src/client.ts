import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

//upsert -> 없으면 생성 있으면 갱신
prisma.todo.create({
    data: {
        title: 'New todo item! - 2',
        description: 'todo'
    }
}).then(res => {
    console.log(res);
})