import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShowersService } from './showers.service';
import { Shower } from './entities/shower.entity';
import { NewShowerInput } from './dto/new-shower.input';
import { EditShowerInput } from './dto/edit-shower.input';

@Resolver(() => Shower)
export class ShowersResolver {
  constructor(private readonly showersService: ShowersService) {}

  @Mutation(() => Shower)
  createShower(@Args('createShowerInput') createShowerInput: NewShowerInput) {
    return this.showersService.create(createShowerInput);
  }

  @Query(() => [Shower], { name: 'showers' })
  findAll() {
    return this.showersService.findAll();
  }

  @Query(() => Shower, { name: 'shower' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.showersService.findOne(id);
  }

  @Mutation(() => Shower)
  updateShower(@Args('updateShowerInput') updateShowerInput: EditShowerInput) {
    return this.showersService.update(updateShowerInput.id, updateShowerInput);
  }

  @Mutation(() => Shower)
  removeShower(@Args('id', { type: () => Int }) id: number) {
    return this.showersService.remove(id);
  }
}
