import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProductsCategories(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `Lista de compañias limit=> ${limit} offset=> ${offset} brand=> ${brand}`;
  }

  @Get(':id')
  getProducts(@Param('id') id: string) {
    return `Product ${id}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'Action for create product',
      payload,
    };
  }
}
