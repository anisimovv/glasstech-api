import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';

import { ShowersService } from './showers.service';

import { NewShowerInput } from './dto/new-shower.input';
import { EditShowerInput } from './dto/edit-shower.input';

import { Shower } from './entities/shower.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { DeleteResponse } from './dto/delete.response';
import { Element } from './entities/element.entity';
import { NewElementInput } from './dto/new-element.input';
import { NewBindingInput } from './dto/new-binding.input';
import { Binding } from './entities/binding.entity';

@Resolver(() => Shower)
export class ShowersResolver {
  constructor(private readonly showersService: ShowersService) {}

  @Mutation(() => Shower)
  @UseGuards(JwtAuthGuard)
  createShower(@Args('createShowerInput') createShowerInput: NewShowerInput) {
    return this.showersService.createShower(createShowerInput);
  }

  @Query(() => [Shower], { name: 'showers' })
  findAll() {
    return this.showersService.findShowers();
  }

  @Query(() => Shower, { name: 'shower' })
  findOne(@Args('id') id: string) {
    return this.showersService.findShower(id);
  }

  @Mutation(() => Shower)
  @UseGuards(JwtAuthGuard)
  updateShower(@Args('updateShowerInput') updateShowerInput: EditShowerInput) {
    return this.showersService.updateShower(
      updateShowerInput.id,
      updateShowerInput,
    );
  }

  @Mutation(() => DeleteResponse)
  @UseGuards(JwtAuthGuard)
  removeShower(@Args('id') id: string) {
    return this.showersService.removeShower(id);
  }

  @Mutation(() => Element)
  @UseGuards(JwtAuthGuard)
  createShowerElement(
    @Args('newElementInput')
    newElementInput: NewElementInput,
  ) {
    return this.showersService.createElement(newElementInput);
  }

  @Mutation(() => DeleteResponse)
  @UseGuards(JwtAuthGuard)
  removeShowerElement(@Args('id') id: string) {
    return this.showersService.removeElement(id);
  }

  @Mutation(() => Binding)
  @UseGuards(JwtAuthGuard)
  createShowerBinding(
    @Args('newBindingInput')
    newBindingInput: NewBindingInput,
  ) {
    return this.showersService.createBinding(newBindingInput);
  }

  @Mutation(() => DeleteResponse)
  @UseGuards(JwtAuthGuard)
  removeShowerBinding(@Args('id') id: string) {
    return this.showersService.removeBinding(id);
  }

  @ResolveField()
  elements(@Parent() shower: Shower) {
    const { id } = shower;
    return this.showersService.findElements(id);
  }

  @ResolveField()
  bindings(@Parent() shower: Shower) {
    const { id } = shower;
    return this.showersService.findBindings(id);
  }
}
