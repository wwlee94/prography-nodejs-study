import { BaseController } from "./BaseController";
import { Get, JsonController, Post, BodyParam } from "routing-controllers";
import {PrismaClient} from '@prisma/client';

@JsonController('/users')
export class UserContoller extends BaseController{
    private prisma: PrismaClient;

    constructor(){
        super() // 상속 받은거여서 상위에 잇는 것 먼저 실행 시켜줘야 에러안남
        this.prisma = new PrismaClient();
    }

    @Get()
    public index(){
        return this.prisma.user.findMany({
            select:{
                id: true,
                name: true,
                email: true,
                posts: true
            }
        })
        // return this.prisma.user.findMany(); // 전체 검색
    }

    @Post()
    public create(){
        return this.prisma.user.create({
            data:{
                name: 'woowon',
                email: 'wwlee94@naver.com'
            }
        })
    }
}