import { Field, ObjectType, OmitType } from '@nestjs/graphql';
import { User } from 'src/users/enteties/user.entity';

@ObjectType()
class UserNoPassword extends OmitType(User, ['password']) {}

@ObjectType()
export class LoginResponse {
  @Field()
  access_token: string;

  @Field(() => UserNoPassword)
  user: UserNoPassword;
}
