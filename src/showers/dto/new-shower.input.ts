import { InputType, Int, Field } from '@nestjs/graphql';
import { Length, MaxLength, Min } from 'class-validator';

@InputType()
export class NewShowerInput {
  @Field()
  @Length(5, 40)
  name: string;

  @Field(() => Int)
  @Min(0)
  minPrice: number;

  @Field(() => Int)
  @Min(0)
  maxPrice: number;
}
