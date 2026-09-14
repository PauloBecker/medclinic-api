import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    const jwtFromRequest = (
      ExtractJwt as unknown as {
        fromAuthHeaderAsBearerToken: () => (req: Request) => string | null;
      }
    ).fromAuthHeaderAsBearerToken();

    // passport-jwt's Strategy type is not fully resolved by the lint parser.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super({
      jwtFromRequest,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET ?? 'minha_chave_secreta',
    });
  }

  async validate(payload: JwtPayload): Promise<User | null> {
    const user = await this.usersService.findById(payload.sub);
    return user || null;
  }
}
