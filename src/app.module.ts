import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepositoryTag } from './app.respository';
import { AppRepositoryRedis } from "./app.repository.redis";

import { AppRepositoryHashmap } from './app.repository.hashmap';
 
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: AppRepositoryTag, useClass: AppRepositoryRedis }, // <-- here
  ],
})
export class AppModule {}
