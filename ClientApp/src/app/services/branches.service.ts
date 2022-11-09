import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Branch } from '../models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  baseApiUrl: string = environment.baseApiUrl;
  //baseApiUrl: string = 'https://localhost:44393';
  constructor(private http: HttpClient) { }

  getAllBranches(): Observable<Branch[]>{
    return this.http.get<Branch[]>(this.baseApiUrl + '/api/branch/getbranch');
  }

  getBranch(id: string): Observable<Branch> {
    return this.http.get<Branch>(this.baseApiUrl + '/api/branch/getonebranch/' + id);
  }

  addBranch(branchDetails: Branch): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(branchDetails);
    return this.http.post(this.baseApiUrl + '/api/branch/addbranch/', body, {'headers': headers});
  }

  deleteBranch(id: number): Observable<Branch>{
    return this.http.delete<Branch>(this.baseApiUrl + '/api/branch/deletebranch/' + id);
  }
}
