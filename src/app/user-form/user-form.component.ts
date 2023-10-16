import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Role } from '../models/role';
import { CompanyService } from '../services/company.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  firstname: String = '';
  lastname: String = '';
  email: String = '';
  company!: Company;
  role!: Role;

  companiesList: Array<Company> = [];
  roles: Array<Role> = [];

  constructor(
    private companyService: CompanyService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.companiesList = this.companyService.getCompanies();
    this.roles.push(Role.ADMIN, Role.USER);
  }

  createUser() {
    this.userService.storeUser(
      new User(
        3,
        this.firstname,
        this.lastname,
        this.email,
        this.company,
        this.role
      )
    );
  }
  resetForm() {
    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.company = {
      id: 0,
      name: "",
      address: "",
    }
  }
}
