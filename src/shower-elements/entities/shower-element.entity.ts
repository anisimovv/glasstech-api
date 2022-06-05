import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Shower } from 'src/showers/entities/shower.entity';
@ObjectType()
export class ShowerElement {
  @Field(() => ID)
  id: string;

  @Field(() => Shower)
  shower: Shower;

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
