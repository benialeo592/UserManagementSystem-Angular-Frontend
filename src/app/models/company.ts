import { User } from "./user";

export class Company {

  id: number;
  name:String;
  address: String;

  constructor(id:number, name:String, address:String) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
}
