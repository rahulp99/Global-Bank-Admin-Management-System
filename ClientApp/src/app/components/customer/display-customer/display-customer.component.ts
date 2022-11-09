import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})
export class DisplayCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  title = 'CustomerAccount';

  customers:Customer[] = [];
  ngOnInit(): void {
    this.getAllCustomerAccountDetails();
  }

  getAllCustomerAccountDetails() {
    this.customerService.getAllCustomerAccountDetails()
      .subscribe(response => {
        console.log(response);
        this.customers = response;
        console.log(this.customers);
      });
  }
  
  deleteCustomerAccount(accountNumber: string) {
    this.customerService.deleteCustomerAccount(accountNumber)
      .subscribe(response => {
        this.getAllCustomerAccountDetails();
        console.log(response);
      })

  }
}
