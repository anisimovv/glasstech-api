import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Binding } from './binding.entity';
import { Element } from './element.entity';

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

  @Field({ nullable: true })
  image: string;

  @Field(() => [Element])
  elements: [Element];

  @Field(() => [Binding])
  bindings: [Binding];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
