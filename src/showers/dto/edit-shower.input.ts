import { NewShowerInput } from './new-shower.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class EditShowerInput extends PartialType(NewShowerInput) {
  @Field(() => Int)
  id: number;
}
