import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateShowerElementInput {
  @Field()
  showerId: string;

  @Field()
  title: string;

  @Field(() => Int)
  minValue: number;

  @Field(() => Int)
  maxValue: number;

  @Field(() => Int)
  defaultValue: number;

  @Field()
  type: string;
}
