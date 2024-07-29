import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CustomerService } from './service/customer.service';
import { AccountService } from './service/account.service';
import { CustomerResolver } from './resolver/customer.resolver';
import { AccountResolver } from './resolver/account.resolver';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      playground:true,
      autoSchemaFile:'schema.gql'
    })
    ],
  controllers: [AppController],
  providers: [AppService,CustomerService,AccountService,CustomerResolver,AccountResolver],
})
export class AppModule {}
