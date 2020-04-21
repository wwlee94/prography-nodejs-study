import { BaseController } from "./BaseController";
import { Get, JsonController, Post, BodyParam } from "routing-controllers";
import {PrismaClient} from '@prisma/client';

@JsonController('/todos')
export class TodoContoller extends BaseController{
    private prisma: PrismaClient;

    constructor(){
        super() // 상속 받은거여서 상위에 잇는 것 먼저 실행 시켜줘야 에러안남
        this.prisma = new PrismaClient();
    }

    @Get()
    public index(){
        return this.prisma.todo.findMany();
    }

    @Post()
    public create(
        @BodyParam('title') title:string,
        @BodyParam('description') description: string
    ){
        return this.prisma.todo.create({
            data:{
                title,
                description
            }
        })
    }
}