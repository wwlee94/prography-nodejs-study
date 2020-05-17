import dotenv from 'dotenv';
import passport from 'passport';
import * as google from 'passport-google-oauth20';
dotenv.config();

const clientID = process.env.GOOGLE_ID;
const clientSecret = process.env.GOOGLE_SECRET;

if (clientID === undefined) throw new Error('clientID is undefined');
if (clientSecret === undefined) throw new Error('clientSecret is undefined');

export default () => {
  passport.use(
    new google.Strategy(
      {
        clientID,
        clientSecret,
        callbackURL: 'http://localhost:3000/auth/google/callback',
      },
      (
        accessToken: string,
        refreshToken: string,
        profile: google.Profile,
        done: (error: any, user?: any) => void
      ) => {
        const {
          _json: { id, avatar_url, login: name, email },
        } = profile;
        console.log(accessToken + ' accessToken \n');
        console.log(refreshToken + ' refreshToken \n');
        console.log(email + ' profile \n');
        return done(null, profile);
        // try {
        //   const user = await User.findOne({ email: email })
        //   //동일한 이메일을 가졌을 때는 이미 가입중인 사용자라면 바로 로그인하도록 아니라면 신규 사용자 생성
        //   if (user) {
        //     user.githubId = id
        //     user.save()
        //     return cb(null, user)
        //   } else {
        //     const newUser = await User.create({
        //       email,
        //       name,
        //       githubId: id,
        //       avatarUrl: avatar_url
        //     })
        //     return cb(null, newUser)
        //   }
        // } catch (error) {
        //   return cb(error)
        // }
      }
    )
  );
};
