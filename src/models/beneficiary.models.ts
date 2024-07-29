import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Customer } from "./customer.model";
import { Account } from "./account.models";

@ObjectType({description:'beneficiary'})
export class Beneficiary{
    @Field(() => ID)
    beneficiaryId:string

    @Field({nullable:false})
    customerId:Customer

    @Field()
    benefits: [string]

    @Field({nullable:false})
    accountNumber:Account
}