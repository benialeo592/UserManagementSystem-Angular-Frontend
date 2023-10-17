import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Role } from '../models/role';
import { CompanyService } from '../services/company.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user!: User;

  companiesList: Array<Company> = [];
  roles: Array<Role> = [];

  private userCopy!: User;

  constructor(
    private companyService: CompanyService,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.companiesList = this.companyService.getCompanies();
    this.roles.push(Role.ADMIN, Role.USER);
    let isEdit = this.activatedRoute.snapshot.paramMap.get('id');
    if (isEdit) {
      const retrievedUser = this.userService.getUserById(parseInt(isEdit));
      retrievedUser
        ? (this.user = retrievedUser)
        : (this.user = new User(
            0,
            '',
            '',
            '',
            this.companiesList[0],
            Role.USER
          ));
    } else {
      this.user = new User(0, '', '', '', this.companiesList[0], Role.USER);
    }
    this.userCopy = Object.assign({}, this.user);
  }
  saveUser() {
    if (this.user.id === 0) {
      this.userService.storeUser(this.user);
    } else {
      this.userService.updateUser(this.user);
    }
  }

  resetForm() {
    if (this.userCopy.id === 0) {
      this.user = new User(0, '', '', '', this.companiesList[0], Role.USER);
    } else {
      this.user = Object.assign({}, this.userCopy);
    }
  }


}
