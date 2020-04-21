import {BaseContoller} from './BaseController';
import { JsonController, Get, Post, Param, HttpError } from 'routing-controllers';

@JsonController('/todos')
export class TodoController extends BaseContoller{
    @Get()
    public index(){
        return [{
            id:1,
            title: 'must do'
        }]
    }

    @Get('/:todoId')
    public update(@Param('todoId') todoId : number){
        throw new HttpError(422, 'error');
        return {
            id: todoId,
            test: 'Hello todoId'
        }
    }

    @Post()
    public create(){
        return {}
    }
}