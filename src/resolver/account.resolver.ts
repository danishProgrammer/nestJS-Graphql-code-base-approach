import { NotFoundException } from "@nestjs/common";
import { Args, Mutation, Resolver,Query } from "@nestjs/graphql";
import { NewAccountDTO } from "src/dto/new-account.dto";
import { Account } from "src/models/account.models";
import { AccountService } from "src/service/account.service";
import { CustomerService } from "src/service/customer.service";

@Resolver(() => Account)
export class AccountResolver{
    constructor(private accountService:AccountService,private readonly customerService:CustomerService){}

    @Query(() => Account)
    async getAccountDetails(@Args('customerId',{type: () => String}) customerId:string, @Args('accountId',{type: () => String}) accountId:string):Promise<Account>{
        const customer = await this.customerService.findById(customerId);
        if(!customer) throw new NotFoundException(`Customer ${customerId} does not exist`);
        const account = await this.accountService.fetchAccountDetails(accountId);
        if(!account)  throw new NotFoundException(`Account ${accountId} details does not exit`);
        return account;
    }

    @Mutation((returns) => Account)
    async newAccount(@Args('newAccountDTO') newAccountDTO: NewAccountDTO):Promise<Account>{
        const customer = await this.customerService.findById(newAccountDTO.customerId);
        if(!customer) throw new NotFoundException('Customer does not exist');
        const account = await this.accountService.newAccount(customer,newAccountDTO);
        return account;
    }

}