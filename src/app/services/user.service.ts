import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { CompanyService } from './company.service';
import { Observable, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Array<User> = [];
  private apiUrl = 'http://localhost:8080/api/v1/users';

  constructor(
    private service: CompanyService,
    private httpClient: HttpClient
  ) {}
  getUsers(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>(this.apiUrl);
  }

  storeUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl + '/create', user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.apiUrl + '/' + id);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(this.apiUrl + '/edit/' + user.id, user);
  }

  destroyUser(id: number): Observable<String> {
    return this.httpClient.delete<String>(this.apiUrl + '/destroy/' + id);
  }
}
