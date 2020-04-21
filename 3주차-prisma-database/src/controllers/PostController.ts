import { BaseController } from "./BaseController";
import { Get, JsonController, Post, BodyParam } from "routing-controllers";
import {PrismaClient} from '@prisma/client';

@JsonController('/posts')
export class PostContoller extends BaseController{
    private prisma: PrismaClient;

    constructor(){
        super() // 상속 받은거여서 상위에 잇는 것 먼저 실행 시켜줘야 에러안남
        this.prisma = new PrismaClient();
    }

    @Get()
    public index(){
        return this.prisma.user.findOne({
            where: {id : 1}
        }).posts();
    }

    @Post()
    public create(
        // @BodyParam('title') title:string,
        // @BodyParam('authorId') authorId: number
    ){
        return this.prisma.post.create({
            data:{
                title: '네번째 게시글입니다.',
                author: {
                    connect:{
                        id: 1
                    }
                }
            }
        })
    }
}