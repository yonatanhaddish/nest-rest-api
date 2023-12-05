import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModules } from './items/items.module';
import keys from './config/keys';

@Module({
  imports: [ItemsModules, MongooseModule.forRoot(keys.mongoURI)],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
