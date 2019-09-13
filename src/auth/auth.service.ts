import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '../config/config.service';

export enum Provider {
  GOOGLE = 'google',
}

@Injectable()
export class AuthService {
  private JWT_SECRET_KEY: string;

  constructor(config: ConfigService) {
    this.JWT_SECRET_KEY = config.JWTSecret;
  }
  // constructor(/*private readonly usersService: UsersService*/) {}

  async validateOAuthLogin(
    thirdPartyId: string,
    provider: Provider,
  ): Promise<string> {
    try {
      // You can add some registration logic here,
      // to register the user using their thirdPartyId (in this case their googleId)
      // let user: IUser = await this.usersService.findOneByThirdPartyId(thirdPartyId, provider);

      // if (!user)
      // user = await this.usersService.registerOAuthUser(thirdPartyId, provider);

      const payload = {
        thirdPartyId,
        provider,
      };

      const jwt: string = sign(payload, this.JWT_SECRET_KEY, {
        expiresIn:
          1 /* days */ * 24 /* hours */ * 60 /* minutes */ * 60 /* seconds */,
      });
      return jwt;
    } catch (err) {
      throw new InternalServerErrorException('validateOAuthLogin', err.message);
    }
  }
}
