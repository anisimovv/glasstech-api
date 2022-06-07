import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';

import { NewShowerInput } from './dto/new-shower.input';
import { EditShowerInput } from './dto/edit-shower.input';
import { NewElementInput } from './dto/new-element.input';
import { NewBindingInput } from './dto/new-binding.input';

@Injectable()
export class ShowersService {
  constructor(private prisma: PrismaService) {}

  async createShower(newShowerInput: NewShowerInput) {
    const { elements, bindings, ...shower } = newShowerInput;

    return await this.prisma.shower.create({
      data: {
        ...shower,
        elements: {
          create: elements,
        },
        bindings: {
          create: bindings,
        },
      },
    });
  }

  async findShowers() {
    return await this.prisma.shower.findMany();
  }

  async findShower(id: string) {
    return await this.prisma.shower.findUnique({ where: { id } });
  }

  async updateShower(id: string, updateShowerInput: EditShowerInput) {
    return await this.prisma.shower.update({
      where: { id },
      data: updateShowerInput,
    });
  }

  async removeShower(id: string) {
    await this.prisma.shower.delete({ where: { id } });

    return { id };
  }

  async findElements(showerId: string) {
    return await this.prisma.showerElement.findMany({
      where: { showerId },
    });
  }

  async createElement(newElementInput: NewElementInput) {
    return await this.prisma.showerElement.create({
      data: newElementInput,
    });
  }

  async removeElement(id: string) {
    await this.prisma.showerElement.delete({ where: { id } });
    return { id };
  }

  async findBindings(showerId: string) {
    return await this.prisma.showerBinding.findMany({
      where: { showerId },
    });
  }

  async createBinding(newBindingInput: NewBindingInput) {
    return await this.prisma.showerBinding.create({
      data: newBindingInput,
    });
  }

  async removeBinding(id: string) {
    await this.prisma.showerBinding.delete({ where: { id } });
    return { id };
  }
}
