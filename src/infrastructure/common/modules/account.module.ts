import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from 'src/application/controllers/account.controller';
import { User, UserSchema } from 'src/core/entities/user.entity';
import { UserService } from 'src/core/services/user.service';
import { AccountService } from 'src/infrastructure/services/account.service';
import { jwtConstants } from '../constants/app.constant';
import { JwtStrategy } from '../strategies/jwt.strategy';
import { LocalStrategy } from '../strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        }),
        PassportModule,
    ],
    controllers: [AccountController],
    providers: [AccountService, UserService, LocalStrategy, JwtStrategy]
})
export class AccountModule { }
