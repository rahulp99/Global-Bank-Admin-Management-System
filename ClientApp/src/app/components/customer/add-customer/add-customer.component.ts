
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customer: Customer = {
    customerNumber: 0,
    accountNumber: 0,
    branchId: 0,
    openingBalance: 0,
    accountOpeningDate: new Date(),
    accountType: '',
    accountStatus: true


  }
  customerForm!: FormGroup;




  ngOnInit(): void {
  }

  onSubmit() {
    this.customerService.addNewCustomerAccountDetails(this.customer).subscribe(response => {
      this.customer = {
        customerNumber: 0,
        accountNumber: 0,
        branchId: 0,
        openingBalance: 0,
        accountOpeningDate: new Date(),
        accountType: '',
        accountStatus: true
      }
      alert("Account Added Successfully!");
    })

  }

}
