import { Injectable } from '@nestjs/common';
import { NewShowerInput } from './dto/new-shower.input';
import { EditShowerInput } from './dto/edit-shower.input';
import { Shower } from './entities/shower.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShowersService {
  constructor(private prisma: PrismaService) {}

  private showers: Shower[] = [];

  create(createShowerInput: NewShowerInput) {
    const newShower: Shower = {
      id: (this.showers.length + 1).toString(),
      ...createShowerInput,
    };

    this.showers.push(newShower);

    return newShower;
  }

  async findAll() {
    return await this.prisma.shower.findMany();
    return this.showers;
  }

  findOne(id: number) {
    return `This action returns a #${id} shower`;
  }

  update(id: number, updateShowerInput: EditShowerInput) {
    return `This action updates a #${id} shower`;
  }

  remove(id: number) {
    return `This action removes a #${id} shower`;
  }
}
