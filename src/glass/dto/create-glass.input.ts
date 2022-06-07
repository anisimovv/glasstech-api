import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGlassInput {
  @Field()
  name: string;

  @Field(() => Int)
  price: number;
}
