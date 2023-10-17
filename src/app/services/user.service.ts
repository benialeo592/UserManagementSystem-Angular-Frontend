import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Company } from '../models/company';
import { Role } from '../models/role';
import { CompanyService } from './company.service';
import { filter } from 'rxjs';

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
    user.id = this.users.length +1;
    this.users.push(user);
  }

  getUserById(id:number):User | undefined{
    return this.users.find(user=>user.id===id);
  }

  updateUser(user:User){
    let index = this.users.findIndex((u) => u.id === user.id);
    if(index){
      this.users[index] = user;
    }
  }

  destroyUser(id: number){
    let index = this.users.findIndex((u) => u.id === id);
    this.users.splice(index, 1);
  }

}
