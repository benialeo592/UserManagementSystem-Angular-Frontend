import { Injectable } from '@angular/core';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private companies: Array<Company> = [
    {
      id: 1,
      name: 'Eng',
      address: 'Via Roma 5, Palermo',
    },
    {
      id: 2,
      name: 'Capgemini',
      address: 'Via Catania 8, Milano',
    }]
  constructor() { }

  getCompanies(){
    return this.companies;
  }

  getCompaniesById(id:number){
    return this.companies[id-1];
  }
}
