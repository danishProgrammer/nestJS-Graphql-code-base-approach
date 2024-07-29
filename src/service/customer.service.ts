import { Injectable } from "@nestjs/common";
import { NewCustomerDTO } from "src/dto/new-customer.dto";
import { Customer } from "src/models/customer.model";

@Injectable()
export class CustomerService{
    
    private customers:Customer[];
    constructor(){
        this.customers = [];
    }

   async findById(id:string):Promise<Customer>{
        const user = this.customers.find(customer => customer.customerId ===  id);
        return user;
    }

    async createNewUser(newUser:NewCustomerDTO): Promise<Customer>{
        const customer: Customer = {...newUser,customerId:`uuid-${this.customers.length + 1}`};
        this.customers.push(customer);
        return customer;
    }
}