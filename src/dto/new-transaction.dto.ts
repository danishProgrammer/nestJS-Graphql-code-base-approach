import { Field, InputType } from "@nestjs/graphql";
import { Account } from "src/models/account.models";
import { AccountType } from "src/utility/account.enum";

@InputType()
export class NewTransactionDTO{
    @Field({nullable:false})
    amount:number;

    @Field({nullable:false})
    accountId:string;

    @Field({nullable:false})
    accountType:AccountType
}