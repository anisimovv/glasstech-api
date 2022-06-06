import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { ShowersService } from './showers.service';
import { ShowerElementsService } from 'src/shower-elements/shower-elements.service';

import { NewShowerInput } from './dto/new-shower.input';
import { EditShowerInput } from './dto/edit-shower.input';

import { Shower } from './entities/shower.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';

@Resolver(() => Shower)
export class ShowersResolver {
  constructor(
    private readonly showersService: ShowersService,
    private readonly showerElemetsService: ShowerElementsService,
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
    return this.showersService.findOne(id);
  }

  @Mutation(() => Shower)
  updateShower(@Args('updateShowerInput') updateShowerInput: EditShowerInput) {
    return this.showersService.update(updateShowerInput.id, updateShowerInput);
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  removeShower(@Args('id') id: string) {
    return this.showersService.remove(id);
  }

  @ResolveField()
  elements(@Parent() shower: Shower) {
    const { id } = shower;
    return this.showerElemetsService.findAll({ showerId: id });
  }
}
