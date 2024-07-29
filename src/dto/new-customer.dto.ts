import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class NewCustomerDTO{
    @Field({nullable:false})
    name:string;

    @Field()
    address:string;

    @Field(() => Int)
    contact:number;

    @Field({nullable:false})
    userName:string;

    @Field({nullable:false})
    password:string;

}