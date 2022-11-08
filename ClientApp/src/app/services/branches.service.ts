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

  deleteBranch(id: number): Observable<Branch>{
    return this.http.delete<Branch>(this.baseApiUrl + '/api/branch/deletebranch/' + id);
  }
}
