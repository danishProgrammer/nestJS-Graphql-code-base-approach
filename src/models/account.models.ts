import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Customer } from "./customer.model";
// import { Transaction } from "./transaction.models";
import { AccountType } from "src/utility/account.enum";

@ObjectType({description:'account'})
export class Account{
    @Field(() => ID)
    accountId:string

    @Field({nullable:false})
    customerId:Customer

    @Field(() => Int)
    balance:number;

    @Field(type => AccountType)
    accountType:AccountType

    // @Field({nullable:false})
    // transaction: Transaction
}