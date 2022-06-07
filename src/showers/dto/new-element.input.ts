import { Field, InputType } from '@nestjs/graphql';
import { ElementInput } from './element.input';

@InputType()
export class NewElementInput extends ElementInput {
  @Field()
  showerId: string;
}
