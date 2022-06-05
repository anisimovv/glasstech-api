import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ShowerElement } from 'src/shower-elements/entities/shower-element.entity';

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

  @Field(() => [ShowerElement], { nullable: true })
  elements: [ShowerElement];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
