import { registerEnumType } from "@nestjs/graphql";

export enum AccountType{
    SAVINGS,
    CURRENT
}

registerEnumType(AccountType,{
    name:'AccountType'
})