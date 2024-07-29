import { Injectable, NotFoundException } from "@nestjs/common";
import { NewTransactionDTO } from "src/dto/new-transaction.dto";
import { Transaction } from "src/models/transaction.models";
import { CustomerService } from "./customer.service";
import { Customer } from "src/models/customer.model";

@Injectable()
export class TransactionService{
    transactions:Transaction[] = [];
    constructor(private customerService:CustomerService){}

    // async addNewTransaction(newTransaction:NewTransactionDTO,accountId:string): Promise<Transaction>{
    //     const accountUser: Customer = await this.customerService.findById(accountId);
    //     if(!accountUser) throw new NotFoundException('No User with this account Id');
    //     const transaction:Transaction = {transactionID:`trans-${this.transactions.length + 1}`,timeStamp:new Date(),accountId:accountUser,...newTransaction};
    //     this.transactions.push(transaction);
    //     return transaction;
    // }
}