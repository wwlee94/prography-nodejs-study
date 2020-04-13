import express from 'express';

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello Fu..ck TypeScript');
});
app.listen(3000, 'localhost', () => {
  console.log('서버 시작');
});
