import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { Role } from '../models/role';
import { CompanyService } from '../services/company.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { ActivatedRoute, Route, Router } from '@angular/router';

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
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.user = new User(0, '', '', '', this.companiesList[0], Role.USER);
  }

  ngOnInit(): void {

    this.companyService.getCompanies().subscribe(
      (company) => (this.companiesList = company),
      (error) => console.error('Error fetching companies:', error)
    );
    this.roles.push(Role.ADMIN, Role.USER);
    let isEdit = this.activatedRoute.snapshot.paramMap.get('id');
    if (isEdit) {
      this.userService.getUserById(parseInt(isEdit)).subscribe(
        (success) => {
          this.user = success;
          this.userCopy = Object.assign({}, this.user);
        },
        (error) => console.error('Error fetching companies:', error)
      );
    }

  }
  saveUser() {
    if (this.user.id === 0) {
      this.userService.storeUser(this.user).subscribe(
        (user) => console.log(user),
        (error) => console.error('Error fetching companies:', error),
        () => this.resetForm()
      );
    } else {
      this.userService.updateUser(this.user).subscribe(
        (user) => console.log(user),
        (error) => console.error('Error fetching companies:', error),
        () => this.router.navigate(['/users'])
      );
    }

  }

  resetForm() {
    if (this.userCopy === undefined) {
      this.user = new User(0, '', '', '', this.companiesList[0], Role.USER);
    } else {
      this.user = Object.assign({}, this.userCopy);
    }
  }
}
