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

  findAll(args?) {
    return this.prisma.element.findMany({ where: args });
  }

  findOne(id: number) {
    return `This action returns a #${id} showerElement`;
  }

  update(id: number, updateShowerElementInput: UpdateShowerElementInput) {
    return `This action updates a #${id} showerElement`;
  }

  remove(id: number) {
    return `This action removes a #${id} showerElement`;
  }
}
