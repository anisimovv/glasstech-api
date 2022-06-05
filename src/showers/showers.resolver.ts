import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ShowersService } from './showers.service';
import { Shower } from './entities/shower.entity';
import { NewShowerInput } from './dto/new-shower.input';
import { EditShowerInput } from './dto/edit-shower.input';
import { ShowerElementsService } from 'src/shower-elements/shower-elements.service';
import { PrismaService } from 'src/prisma.service';

@Resolver(() => Shower)
export class ShowersResolver {
  constructor(
    private readonly showersService: ShowersService,
    private readonly showerElemetsService: ShowerElementsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Shower)
  createShower(@Args('createShowerInput') createShowerInput: NewShowerInput) {
    return this.showersService.create(createShowerInput);
  }

  @Query(() => [Shower], { name: 'showers' })
  findAll() {
    return this.showersService.findAll();
  }

  @Query(() => Shower, { name: 'shower' })
  findOne(@Args('id') id: string) {
    return this.prisma.shower.findUnique({ where: { id } });
  }

  @Mutation(() => Shower)
  updateShower(@Args('updateShowerInput') updateShowerInput: EditShowerInput) {
    return this.showersService.update(updateShowerInput.id, updateShowerInput);
  }

  @Mutation(() => Boolean)
  async removeShower(@Args('id') id: string) {
    return await this.showersService.remove(id);
  }

  @ResolveField()
  async elements(@Parent() shower: Shower) {
    const { id } = shower;
    return this.showerElemetsService.findAll({ showerId: id });
  }
}
