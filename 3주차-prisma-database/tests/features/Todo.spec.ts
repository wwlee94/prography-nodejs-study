import supertest from 'supertest';
import {app} from '../../src/app';

describe('test Todo',() => {
    const client = supertest(app) // 서버를 모킹해주고
    // test('create todo', async () => {
    //     const res = await client.post('/todos').send({
    //         title: 'new Todo',
    //         describe: 'new test'
    //     });
    //     expect(res.status).toBe(200);
    // })
    test('index todos', async () => {
        const res = await client.get('/todos');
        expect(res.status).toBe(200);
    })
});