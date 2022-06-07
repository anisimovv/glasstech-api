import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Glass {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field(() => Int)
  price: number;
}
