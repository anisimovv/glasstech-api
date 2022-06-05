import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ShowerElementsService } from './shower-elements.service';
import { ShowerElement } from './entities/shower-element.entity';
import { CreateShowerElementInput } from './dto/create-shower-element.input';
import { UpdateShowerElementInput } from './dto/update-shower-element.input';

@Resolver(() => ShowerElement)
export class ShowerElementsResolver {
  constructor(private readonly showerElementsService: ShowerElementsService) {}

  @Mutation(() => ShowerElement)
  createShowerElement(@Args('createShowerElementInput') createShowerElementInput: CreateShowerElementInput) {
    return this.showerElementsService.create(createShowerElementInput);
  }

  @Query(() => [ShowerElement], { name: 'showerElements' })
  findAll() {
    return this.showerElementsService.findAll();
  }

  @Query(() => ShowerElement, { name: 'showerElement' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.showerElementsService.findOne(id);
  }

  @Mutation(() => ShowerElement)
  updateShowerElement(@Args('updateShowerElementInput') updateShowerElementInput: UpdateShowerElementInput) {
    return this.showerElementsService.update(updateShowerElementInput.id, updateShowerElementInput);
  }

  @Mutation(() => ShowerElement)
  removeShowerElement(@Args('id', { type: () => Int }) id: number) {
    return this.showerElementsService.remove(id);
  }
}
