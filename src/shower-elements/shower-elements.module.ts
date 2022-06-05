import { Module } from '@nestjs/common';
import { ShowerElementsService } from './shower-elements.service';
import { ShowerElementsResolver } from './shower-elements.resolver';
import { PrismaService } from 'src/prisma.service';
import { ShowersService } from 'src/showers/showers.service';

@Module({
  providers: [
    ShowerElementsResolver,
    ShowerElementsService,
    ShowersService,
    PrismaService,
  ],
})
export class ShowerElementsModule {}
