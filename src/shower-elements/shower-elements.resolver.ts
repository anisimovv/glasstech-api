import { Resolver, Mutation, Args, ResolveField } from '@nestjs/graphql';
import { ShowerElementsService } from './shower-elements.service';
import { ShowerElement } from './entities/shower-element.entity';
import { CreateShowerElementInput } from './dto/create-shower-element.input';
import { UpdateShowerElementInput } from './dto/update-shower-element.input';
import { ShowersService } from 'src/showers/showers.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => ShowerElement)
export class ShowerElementsResolver {
  constructor(
    private readonly showerElementsService: ShowerElementsService,
    private readonly showersService: ShowersService,
  ) {}

  @Mutation(() => ShowerElement)
  @UseGuards(JwtAuthGuard)
  createShowerElement(
    @Args('createShowerElementInput')
    createShowerElementInput: CreateShowerElementInput,
  ) {
    return this.showerElementsService.create(createShowerElementInput);
  }

  @Mutation(() => ShowerElement)
  @UseGuards(JwtAuthGuard)
  updateShowerElement(
    @Args('updateShowerElementInput')
    updateShowerElementInput: UpdateShowerElementInput,
  ) {
    return this.showerElementsService.update(
      updateShowerElementInput.id,
      updateShowerElementInput,
    );
  }

  @Mutation(() => Boolean)
  @UseGuards(JwtAuthGuard)
  removeShowerElement(@Args('id') id: string) {
    return this.showerElementsService.remove(id);
  }

  @ResolveField()
  // TODO: resolve type issues
  shower(showerElement: any) {
    const { showerId } = showerElement;
    return this.showersService.findOne(showerId);
  }
}
