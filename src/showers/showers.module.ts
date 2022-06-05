import { Module } from '@nestjs/common';
import { ShowersService } from './showers.service';
import { ShowersResolver } from './showers.resolver';
import { PrismaService } from 'src/prisma.service';
import { ShowerElementsService } from 'src/shower-elements/shower-elements.service';

@Module({
  providers: [
    ShowersResolver,
    ShowersService,
    ShowerElementsService,
    PrismaService,
  ],
})
export class ShowersModule {}
