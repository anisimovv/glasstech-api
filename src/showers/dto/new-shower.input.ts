import { InputType, Int, Field } from '@nestjs/graphql';
import { Length, MaxLength, Min } from 'class-validator';
import { CreateShowerElementInput } from 'src/shower-elements/dto/create-shower-element.input';

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

  @Field(() => [CreateShowerElementInput], { nullable: true })
  elements?: [CreateShowerElementInput];
}
