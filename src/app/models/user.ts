import { Company } from "./company";
import { Role } from "./role";


export class User {

   id: number;
   firstname: String;
   lastname: String;
   email: String;
   company: Company;
   role: Role;

  constructor(
    id: number,
    firstname: String,
    lastname: String,
    email: String,
    company: Company,
    role: Role
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.company = company;
    this.role = role;
  }

}
