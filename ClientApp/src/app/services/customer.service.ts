import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  baseUrl = 'https://localhost:7282/api/Customer';

  constructor(private http: HttpClient) { }

  getAllCustomerAccountDetails(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl);

  }

  addNewCustomerAccountDetails(customer: Customer): Observable<Customer> {
    // console.log(customer);
    // customer.accountNumber = '';
    return this.http.post<Customer>(this.baseUrl, customer);
  }

  deleteCustomerAccount(accountNumber: string): Observable<Customer> {
    return this.http.delete<Customer>(this.baseUrl + '/' + accountNumber);

  }

  getCustomerNumbers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/getcustomernumbers');
  }

  getBranchIDs(): Observable<any> {
    return this.http.get<any>('https://localhost:7282' + '/api/branch/getbranchids');
  }

}
