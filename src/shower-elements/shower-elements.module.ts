import { Module } from '@nestjs/common';
import { ShowerElementsService } from './shower-elements.service';
import { ShowerElementsResolver } from './shower-elements.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ShowerElementsResolver, ShowerElementsService, PrismaService],
})
export class ShowerElementsModule {}
