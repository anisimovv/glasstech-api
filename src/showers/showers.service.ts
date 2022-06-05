import { Injectable } from '@nestjs/common';
import { NewShowerInput } from './dto/new-shower.input';
import { EditShowerInput } from './dto/edit-shower.input';
import { Shower } from './entities/shower.entity';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShowersService {
  constructor(private prisma: PrismaService) {}

  private showers: Shower[] = [];

  async create(createShowerInput: NewShowerInput) {
    const { name, minPrice, maxPrice, elements } = createShowerInput;
    const newShower = await this.prisma.shower.create({
      data: { name, minPrice, maxPrice },
    });

    elements.forEach(async (element) => {
      await this.prisma.element.create({
        data: { ...element, showerId: newShower.id },
      });
    });

    return await this.prisma.shower.findUnique({
      where: { id: newShower.id },
      include: { elements: true },
    });
  }

  async findAll() {
    return await this.prisma.shower.findMany();
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
