import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CommandModule } from 'nestjs-command';
import { ConnectorsModule } from './connectors/connectors.module';
import { AuthModule } from './auth/auth.module';

ConfigModule.forRoot();
@Module({
  imports: [
    CommandModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.whrim.mongodb.net/${process.env.DATABASE_DB}?retryWrites=true&w=majority`,
    ),
    UsersModule,
    ConnectorsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
