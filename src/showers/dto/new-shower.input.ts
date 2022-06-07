import { InputType, Int, Field } from '@nestjs/graphql';
import { Length, Min } from 'class-validator';
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

  @Field(() => [ElementInput], { nullable: true })
  elements?: [ElementInput];

  @Field(() => [BindingInput], { nullable: true })
  bindings?: [BindingInput];
}
