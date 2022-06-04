import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Shower {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  minPrice: number;

  @Field(() => Int)
  maxPrice: number;
}
