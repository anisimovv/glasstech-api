import { Field, InputType } from '@nestjs/graphql';
import { BindingInput } from './binding.input';

@InputType()
export class NewBindingInput extends BindingInput {
  @Field()
  showerId: string;
}
