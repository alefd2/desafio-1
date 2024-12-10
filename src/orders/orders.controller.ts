import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async create(@Body('assetId') assetId: string, @Body('price') price: number) {
    return this.ordersService.create(assetId, price);
  }

  @Get()
  async findAll() {
    return this.ordersService.findAll();
  }
}
