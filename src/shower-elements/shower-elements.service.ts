import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateShowerElementInput } from './dto/create-shower-element.input';
import { UpdateShowerElementInput } from './dto/update-shower-element.input';

@Injectable()
export class ShowerElementsService {
  constructor(private prisma: PrismaService) {}

  async create(createShowerElementInput: CreateShowerElementInput) {
    return await this.prisma.element.create({ data: createShowerElementInput });
  }

  // TODO: resolve type issues
  findAll(args?: any) {
    return this.prisma.element.findMany({ where: args });
  }

  async update(id: string, updateShowerElementInput: UpdateShowerElementInput) {
    return await this.prisma.element.update({
      where: { id },
      data: updateShowerElementInput,
    });
  }

  async remove(id: string) {
    try {
      await this.prisma.element.delete({ where: { id } });
    } catch {
      return false;
    }
    return true;
  }
}
