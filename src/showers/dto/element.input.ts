import { Field, InputType, Int } from '@nestjs/graphql';
import { ElementType } from '../entities/element-type.enum';

@InputType()
export class ElementInput {
  @Field()
  title: string;

  @Field(() => Int)
  minValue: number;

  @Field(() => Int)
  maxValue: number;

  @Field(() => Int)
  defaultValue: number;

  @Field()
  type: ElementType;
}
