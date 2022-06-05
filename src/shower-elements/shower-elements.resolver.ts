import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
} from '@nestjs/graphql';
import { ShowerElementsService } from './shower-elements.service';
import { ShowerElement } from './entities/shower-element.entity';
import { CreateShowerElementInput } from './dto/create-shower-element.input';
import { UpdateShowerElementInput } from './dto/update-shower-element.input';
import { ShowersService } from 'src/showers/showers.service';

@Resolver(() => ShowerElement)
export class ShowerElementsResolver {
  constructor(
    private readonly showerElementsService: ShowerElementsService,
    private readonly showersService: ShowersService,
  ) {}

  @Mutation(() => ShowerElement)
  createShowerElement(
    @Args('createShowerElementInput')
    createShowerElementInput: CreateShowerElementInput,
  ) {
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
  updateShowerElement(
    @Args('updateShowerElementInput')
    updateShowerElementInput: UpdateShowerElementInput,
  ) {
    return this.showerElementsService.update(
      updateShowerElementInput.id,
      updateShowerElementInput,
    );
  }

  @Mutation(() => ShowerElement)
  removeShowerElement(@Args('id', { type: () => Int }) id: number) {
    return this.showerElementsService.remove(id);
  }

  @ResolveField()
  // TODO: resolve type issues
  shower(showerElement) {
    console.log(showerElement.showerId);
    const { showerId } = showerElement;
    return this.showersService.findOne(showerId);
  }
}
