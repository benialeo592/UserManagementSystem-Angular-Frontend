import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Role } from '../models/role';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {

  firstname:String = "";
  lastname:String = "";
  email:String = "";
  company!: Company;
  role!: Role;

  companiesList:Company[] = [];
  roles:Array<Role> = [];


  constructor(private companyService:CompanyService) {}

  ngOnInit(): void {
    this.companiesList = this.companyService.getCompanies();
    this.roles.push(Role.ADMIN, Role.USER);
  }


}
