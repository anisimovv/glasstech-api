import { NewShowerInput } from './new-shower.input';
import { InputType, Field, PartialType, OmitType } from '@nestjs/graphql';

@InputType()
export class EditShowerInput extends PartialType(
  OmitType(NewShowerInput, ['elements']),
) {
  @Field()
  id: string;
}
