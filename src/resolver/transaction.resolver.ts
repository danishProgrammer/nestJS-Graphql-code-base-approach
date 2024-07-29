import { Mutation, Resolver } from "@nestjs/graphql";
import { Transaction } from "src/models/transaction.models";
import { TransactionService } from "src/service/transaction.service";

@Resolver((of) => Transaction)
export class TransactionResolver{
    constructor(private transactionService:TransactionService){}

    // @Mutation((returns) => Transaction)
    // async addNewTransaction():Promise<Transaction>{
    //     const transaction = this.transactionService.addNewTransaction()
    // }
}