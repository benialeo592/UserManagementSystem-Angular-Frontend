import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => this.users = users,
      (error) => console.error('Error fetching companies:', error)
    );

  }

  deleteUser(id: number) {
    this.userService.destroyUser(id).subscribe(
      (message) => {
        console.log(message)
        this.userService.getUsers().subscribe(
          (users) => (this.users = users),
          (error) => console.error('Error fetching companies:', error)
        );
      },
      (error) => console.error('Error fetching companies:', error)
    );
  }
}
