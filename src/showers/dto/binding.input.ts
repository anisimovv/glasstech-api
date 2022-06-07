import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class BindingInput {
  @Field()
  title: string;

  @Field(() => Int)
  price: number;
}
