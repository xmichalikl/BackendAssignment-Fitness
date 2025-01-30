import { ExtractJwt, Strategy as JwtStrategy, StrategyOptionsWithoutRequest, VerifiedCallback } from 'passport-jwt';
import passport from 'passport';
import dotenv from 'dotenv';

import { prisma } from '@/config/prisma';
import { UserJwt } from '@/types';

dotenv.config();

const options: StrategyOptionsWithoutRequest = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET,
};

async function passportVerify(payload: UserJwt, done: VerifiedCallback) {
  try {
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) return done(null, false);
    return done(null, user);
  } catch (error) {
    return done(error, false);
  }
}

passport.use(new JwtStrategy(options, passportVerify));

export { passport };
