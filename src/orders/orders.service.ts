import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(assetId: string, price: number): Promise<Order> {
    return this.prisma.order.create({
      data: { assetId, price },
    });
  }

  async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany();
  }
}
