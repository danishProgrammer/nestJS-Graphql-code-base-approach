import { NotFoundException } from "@nestjs/common";
import { Resolver,Query, Args, Mutation } from "@nestjs/graphql";
import { NewCustomerDTO } from "src/dto/new-customer.dto";
import { Customer } from "src/models/customer.model";
import { CustomerService } from "src/service/customer.service";

@Resolver((of) => Customer)
export class CustomerResolver{
    constructor(private readonly customerService:CustomerService){}

    @Query((returns) => Customer)
    async getCustomerById(@Args('customerId',{type: () => String}) id:string):Promise<Customer>{
        // const exampleUser = new User();
        // exampleUser.age = 29;
        // exampleUser.firstName = 'Danish';
        // exampleUser.lastName = 'Arora';
        // exampleUser.id = 'uuid-1';
        // exampleUser.createdDate = new Date();

        // return exampleUser;
        const customer = await this.customerService.findById(id);
        if(!customer) throw new NotFoundException(id);

        return customer;
    }

    @Mutation((returns) => Customer)
    async newCustomer(@Args('newCustomerDTO') NewCustomerDTO: NewCustomerDTO):Promise<Customer>{
        const user = await this.customerService.createNewUser(NewCustomerDTO);
        return user;
    }
}