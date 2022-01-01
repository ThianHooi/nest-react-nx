import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderProductModule } from './order-product/order-product.module';
import configuration from './config/configuration';
import { UserEntity } from './user/user.entity';
import { OrderEntity } from './order/order.entity';
import { OrderProductEntity } from './order-product/order-product.entity';
import { ProductEntity } from './product/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: configuration().database.name,
      // entities: ['dist/apps/api/**/*.entity{.ts,.js}'],
      entities: [UserEntity, OrderEntity, OrderProductEntity, ProductEntity],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ProductModule,
    OrderModule,
    OrderProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
