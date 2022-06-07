import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { ElementType } from './element-type.enum';

@ObjectType()
export class Element {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field(() => Int)
  maxValue: number;

  @Field(() => Int)
  minValue: number;

  @Field(() => Int)
  defaultValue: number;

  @Field(() => ElementType)
  type: ElementType;
}
