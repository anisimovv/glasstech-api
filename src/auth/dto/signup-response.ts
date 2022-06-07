import { ObjectType, OmitType } from '@nestjs/graphql';
import { User } from 'src/users/enteties/user.entity';

@ObjectType()
export class SignUpResponse extends OmitType(User, ['password']) {}
