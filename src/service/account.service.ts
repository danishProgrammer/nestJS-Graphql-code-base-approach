import { Injectable } from "@nestjs/common";
import { NewAccountDTO } from "src/dto/new-account.dto";
import { Account } from "src/models/account.models";
import { Customer } from "src/models/customer.model";

@Injectable()
export class AccountService{
    private accounts:Account[] = [];
    constructor(){}

    async newAccount(customer:Customer,newAccountDTO:NewAccountDTO):Promise<Account>{
        const account: Account = {...newAccountDTO,accountId:`acc-${this.accounts.length + 1}`,customerId:customer};
        this.accounts.push(account);
        return account;
    }

    async fetchAccountDetails(accountId:string):Promise<Account>{
        const account:Account = this.accounts.find(acc => acc.accountId == accountId);
        return account;
    }
}