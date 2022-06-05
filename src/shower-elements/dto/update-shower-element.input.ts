import { CreateShowerElementInput } from './create-shower-element.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateShowerElementInput extends PartialType(CreateShowerElementInput) {
  @Field(() => Int)
  id: number;
}
