import { Field, InputType, Int } from "@nestjs/graphql";
import { AccountType } from "src/utility/account.enum";

@InputType()
export class NewAccountDTO{
    @Field({nullable:false})
    customerId:string

    @Field(type => Int)
    balance:number

    @Field(type => AccountType)
    accountType:AccountType
}