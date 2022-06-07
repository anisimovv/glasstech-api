import { registerEnumType } from '@nestjs/graphql';

export enum ElementType {
  WIDTH = 'WIDTH',
  HEIGHT = 'HEIGHT',
}

registerEnumType(ElementType, {
  name: 'ElementType',
});
