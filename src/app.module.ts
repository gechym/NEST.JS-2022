import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PostModule,
    UserModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.URL_DB),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
