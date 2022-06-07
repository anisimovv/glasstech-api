import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Binding {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => Int)
  price: number;
}
