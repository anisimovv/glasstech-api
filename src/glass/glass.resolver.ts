import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GlassService } from './glass.service';
import { Glass } from './entities/glass.entity';
import { CreateGlassInput } from './dto/create-glass.input';
import { UpdateGlassInput } from './dto/update-glass.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { DeleteGlassResponse } from './dto/delete-glass.response';

@Resolver(() => Glass)
export class GlassResolver {
  constructor(private readonly glassService: GlassService) {}

  @Mutation(() => Glass)
  @UseGuards(JwtAuthGuard)
  createGlass(@Args('createGlassInput') createGlassInput: CreateGlassInput) {
    return this.glassService.create(createGlassInput);
  }

  @Query(() => [Glass], { name: 'glass' })
  findAll() {
    return this.glassService.findAll();
  }

  @Mutation(() => Glass)
  @UseGuards(JwtAuthGuard)
  updateGlass(@Args('updateGlassInput') updateGlassInput: UpdateGlassInput) {
    return this.glassService.update(updateGlassInput.id, updateGlassInput);
  }

  @Mutation(() => DeleteGlassResponse)
  @UseGuards(JwtAuthGuard)
  removeGlass(@Args('id') id: string) {
    return this.glassService.remove(id);
  }
}
