import supertest from 'supertest';
import {app} from '../../src/app';

const assertItem = (item : any) => {
        const expectKeys = ['id','title'];
        Object.keys(item).forEach((key) => {
            const idx = expectKeys.indexOf(key);
            if (idx > -1){
                expectKeys.splice(idx, 1);
            }
        })
        expect(expectKeys.length).toBe(0);
}

describe('test Todo', () => {
    const client = supertest(app);
    test('test index todos', async ()=>{
        const res = await client.get('/todos')
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        for(const item of res.body){
            assertItem(item);
        }
    })
})