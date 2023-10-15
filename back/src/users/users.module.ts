import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { UsersService } from './users.service';

const dbPassword = '00T3BNXiyy8krWU';
const dbUsername = 'easygenerator';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.bkmvho6.mongodb.net/easygenerator`,
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
