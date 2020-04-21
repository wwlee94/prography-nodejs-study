import supertest from 'supertest';
import {app} from '../src/app';

describe('test index.ts', () => {
    const client = supertest(app);
    test('test is server running?', async ()=>{
        const res = await client.get('/users')
        expect(res.status).toBe(200);
    })
})