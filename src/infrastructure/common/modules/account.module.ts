import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from 'src/application/controllers/account.controller';
import { User, UserSchema } from 'src/core/entities/user.entity';
import { AccountService } from 'src/infrastructure/services/account.service';

@Module({
    imports:[MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
    controllers:[AccountController],
    providers:[AccountService]
})
export class AccountModule {}
