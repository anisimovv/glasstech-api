import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { ShowersModule } from './showers/showers.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GlassModule } from './glass/glass.module';

@Module({
  imports: [
    ShowersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
    }),
    AuthModule,
    UsersModule,
    GlassModule,
  ],
  providers: [PrismaService],
  controllers: [],
})
export class AppModule {}
