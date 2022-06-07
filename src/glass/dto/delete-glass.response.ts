import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteGlassResponse {
  @Field()
  id: string;
}
