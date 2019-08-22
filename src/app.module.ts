import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MicroUsersModule } from './micro-users/micro-users.module';
import { V1Module } from './api/v1/v1.module';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   autoSchemaFile: 'schema.gql',
    // }),
    MicroUsersModule,
    V1Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
