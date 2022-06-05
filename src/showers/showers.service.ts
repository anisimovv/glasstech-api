import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';

import { NewShowerInput } from './dto/new-shower.input';
import { EditShowerInput } from './dto/edit-shower.input';

import { Shower } from './entities/shower.entity';
@Injectable()
export class ShowersService {
  constructor(private prisma: PrismaService) {}

  private showers: Shower[] = [];

  async create(createShowerInput: NewShowerInput) {
    const { name, minPrice, maxPrice, elements } = createShowerInput;
    const newShower = await this.prisma.shower.create({
      data: { name, minPrice, maxPrice },
    });

    const elementPromises = elements.map((element) => {
      return this.prisma.element.create({
        data: { ...element, showerId: newShower.id },
      });
    });

    await Promise.all(elementPromises);

    return await this.prisma.shower.findUnique({
      where: { id: newShower.id },
    });
  }

  async findAll() {
    return await this.prisma.shower.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.shower.findUnique({ where: { id } });
  }

  async update(id: string, updateShowerInput: EditShowerInput) {
    return await this.prisma.shower.update({
      where: { id: id },
      data: { ...updateShowerInput },
    });
  }

  async remove(id: string) {
    await this.prisma.shower.delete({ where: { id } });
    await this.prisma.element.deleteMany({ where: { showerId: null } });

    return true;
  }
}
