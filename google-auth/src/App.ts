import express from 'express';
import passport from 'passport';
import passportConfig from './passport';

const app = express();
app.use(passport.initialize());
passportConfig();

passport.serializeUser((user, done) => {
  done(null, user); // user객체가 deserializeUser로 전달됨.
});
passport.deserializeUser((user, done) => {
  done(null, user); // 여기의 user가 req.user가 됨
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello Fu..ck TypeScript');
});

app.get('/login', (req: express.Request, res: express.Response) => {
  res.send('Hello Login Page ! - Failure Google Login');
});

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    accessType: 'offline',
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/',
  })
);

app.listen(3000, 'localhost', () => {
  console.log('서버 시작');
});
