import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Ejemplo endpoint con parametro
  @Get('products/:id')
  getProducts(@Param('id') id: string) {
    return `Product ${id}`;
  }

  // Ejemplo endpoint con doble parametro
  @Get('categories/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `product ${productId} and ${id}`;
  }

  @Get('companies')
  getCompanies(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Lista de compañias limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }
}
