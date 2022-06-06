import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/enteties/user.entity';

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => User)
  user: User;
}
