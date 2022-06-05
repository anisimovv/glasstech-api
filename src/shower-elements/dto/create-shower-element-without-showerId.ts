import { CreateShowerElementInput } from './create-shower-element.input';
import { InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class CrateShowerElementWithoutShowerId extends OmitType(
  CreateShowerElementInput,
  ['showerId'],
) {}
