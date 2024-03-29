import { InputType, Int, Field } from '@nestjs/graphql';
import { BindingInput } from './binding.input';
import { ElementInput } from './element.input';

@InputType()
export class NewShowerInput {
  @Field()
  name: string;

  @Field(() => Int)
  minPrice: number;

  @Field(() => Int)
  maxPrice: number;

  @Field({ nullable: true })
  image: string;

  @Field(() => [ElementInput], { nullable: true })
  elements?: [ElementInput];

  @Field(() => [BindingInput], { nullable: true })
  bindings?: [BindingInput];
}
