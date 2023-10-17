import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private apiUrl = 'http://localhost:8080/api/v1/companies';
  private companies: Array<Company> = [];
  constructor(private httpClient: HttpClient) {}


  getCompanies() : Observable<Array<Company>> {
    return this.httpClient.get<Array<Company>>(this.apiUrl);
  }

  getCompaniesById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(this.apiUrl + '/' + id);
  }
}
