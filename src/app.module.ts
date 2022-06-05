import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { ShowersModule } from './showers/showers.module';
import { ShowerElementsModule } from './shower-elements/shower-elements.module';

@Module({
  imports: [
    ShowersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
    }),
    ShowerElementsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
