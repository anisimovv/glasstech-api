import { CreateShowerElementInput } from './create-shower-element.input';
import { InputType, Field, PartialType, OmitType } from '@nestjs/graphql';

@InputType()
export class UpdateShowerElementInput extends PartialType(
  OmitType(CreateShowerElementInput, ['showerId']),
) {
  @Field()
  id: string;
}
