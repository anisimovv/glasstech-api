import { Module } from '@nestjs/common';
import { GlassService } from './glass.service';
import { GlassResolver } from './glass.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [GlassResolver, GlassService, PrismaService],
})
export class GlassModule {}
