import { ConfigModule } from '@nestjs/config';
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
    ConfigModule.forRoot(),
    ShowersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      cors: {
        origin: ['http://localhost:3000', /\.anisimovv.com\.com$/],
        credentials: true,
      },
    }),
    AuthModule,
    UsersModule,
    GlassModule,
  ],
  providers: [PrismaService],
  controllers: [],
})
export class AppModule {}
