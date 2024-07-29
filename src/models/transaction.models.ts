import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Account } from "./account.models";
import { AccountType } from "src/utility/account.enum";

@ObjectType({description:'transaction'})
export class Transaction{
    @Field(() => ID)
    transactionID: String;

    @Field({nullable:false})
    amount:number;

    @Field({nullable:false})
    accountId: Account;

    @Field({nullable:false})
    accountType:AccountType

    @Field({nullable:false})
    timeStamp: Date
    
}