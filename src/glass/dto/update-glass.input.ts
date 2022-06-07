import { CreateGlassInput } from './create-glass.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGlassInput extends PartialType(CreateGlassInput) {
  @Field()
  id: string;
}
