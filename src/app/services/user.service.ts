import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Company } from '../models/company';
import { Role } from '../models/role';
import { CompanyService } from './company.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Array<User> = [
    {
      id: 1,
      firstname: 'Beniamino',
      lastname: 'Leone',
      email: 'benialeo592@gmail.com',
      company: this.service.getCompaniesById(1),
      role: Role.USER,
    },
    {
      id: 2,
      firstname: 'Giammarco',
      lastname: 'Rossi',
      email: 'giammarcorossi49@gmail.com',
      company: this.service.getCompaniesById(2),
      role: Role.USER,
    },
    {
      id: 3,
      firstname: 'Bello',
      lastname: 'Verdi',
      email: 'belloverdi76@gmail.com',
      company: this.service.getCompaniesById(2),
      role: Role.USER,
    },
  ];

  constructor(private service: CompanyService) {}
  getUsers() {
    return this.users;
  }

  storeUser(user:User){
    this.users.push(user);
  }

}
