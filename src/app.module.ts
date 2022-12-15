import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controller/products.controller';
import { CategoriesController } from './controller/categories.controller';
import { OrderController } from './controller/order.controller';
import { UserController } from './controller/user.controller';
import { CustomerController } from './controller/customer.controller';
import { BrandController } from './controller/brand.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrderController, UserController, CustomerController, BrandController],
  providers: [AppService],
})
export class AppModule {}
