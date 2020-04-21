import express from 'express';
import {useExpressServer} from 'routing-controllers';

const app = express();

useExpressServer(app, {
    // defaultErrorHandler: false,
    controllers: [`${__dirname}/controllers/**`]
    // controllers: [`${__dirname}/controllers/*`] // ok
    // controllers: [`${__dirname}/controllers/*.ts`] // no !
});
// app.use((err:any, _:Request, res:Response, next:NextFunction) => {

// });
export{
    app
}