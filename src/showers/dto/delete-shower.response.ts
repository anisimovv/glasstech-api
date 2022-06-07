import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteShowerResponse {
  @Field(() => ID)
  id: string;
}
