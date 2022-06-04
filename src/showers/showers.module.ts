import { Module } from '@nestjs/common';
import { ShowersService } from './showers.service';
import { ShowersResolver } from './showers.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ShowersResolver, ShowersService, PrismaService],
})
export class ShowersModule {}
