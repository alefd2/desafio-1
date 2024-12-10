import { Injectable } from '@nestjs/common';
import { Asset } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssetsService {
  constructor(private prisma: PrismaService) {}

  async create(symbol: string): Promise<Asset> {
    return this.prisma.asset.create({
      data: { symbol },
    });
  }

  async findAll(): Promise<Asset[]> {
    return this.prisma.asset.findMany();
  }
}
