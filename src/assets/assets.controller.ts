import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private assetsService: AssetsService) {}

  @Post()
  async create(@Body('symbol') symbol: string) {
    return this.assetsService.create(symbol);
  }

  @Get()
  async findAll() {
    return this.assetsService.findAll();
  }
}
