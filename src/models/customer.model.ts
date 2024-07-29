import { Field, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({description:'customer'})
export class Customer{
    @Field((type) => ID)
    customerId:string;

    @Field({nullable:false})
    name:string;

    @Field()
    address:string;

    @Field({nullable:false})
    contact:number;

    @Field({nullable:false})
    userName:string;

    @Field({nullable:false})
    password:string;
}