import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { ConfigService } from '../config/config.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(config: ConfigService) {
    super({
      clientID: config.get('clientID'),
      clientSecret: config.get('clientSecret'),
      callbackURL: 'http://localhost:3000/auth/google/callback',
      passReqToCallback: true,
      scope: ['profile'],
    });
    console.log('Test', config.get('clientID'), config.get('clientSecret'));
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ) {
    try {
      console.log(profile);

      const jwt: string = 'placeholderJWT';
      const user = {
        jwt,
      };

      done(null, user);
    } catch (err) {
      // console.log(err)
      done(err, false);
    }
  }
}
