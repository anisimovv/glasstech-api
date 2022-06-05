import { InputType, Int, Field } from '@nestjs/graphql';
import { Length, Min } from 'class-validator';
import { CrateShowerElementWithoutShowerId } from 'src/shower-elements/dto/create-shower-element-without-showerId';

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

  @Field(() => [CrateShowerElementWithoutShowerId], {
    nullable: true,
  })
  elements?: [CrateShowerElementWithoutShowerId];
}
