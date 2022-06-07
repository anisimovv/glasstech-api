import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGlassInput } from './dto/create-glass.input';
import { UpdateGlassInput } from './dto/update-glass.input';

@Injectable()
export class GlassService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createGlassInput: CreateGlassInput) {
    return await this.prisma.glass.create({ data: createGlassInput });
  }

  async findAll() {
    return await this.prisma.glass.findMany();
  }

  async update(id: string, updateGlassInput: UpdateGlassInput) {
    return await this.prisma.glass.update({
      where: { id },
      data: updateGlassInput,
    });
  }

  async remove(id: string) {
    await this.prisma.glass.delete({ where: { id } });
    return { id };
  }
}
