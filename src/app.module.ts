import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';

import { EnterprisesModule } from './enterprises/enterprises.module';
import { ProductsModule } from './products/products.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
     MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const uri = configService.get<string>(process.env.MONGO_DB!) || 'mongodb://sally:sally@localhost:27017/sally?authSource=admin';
        return { uri }
      }
    }),
    EnterprisesModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
