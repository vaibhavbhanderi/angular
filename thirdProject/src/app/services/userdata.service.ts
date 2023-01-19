import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
URL="https://jsonplaceholder.typicode.com/users "
  constructor(private  http:HttpClient) { }
  users(){

    return this.http.get(this.URL)
      // return[
      //   {
      //     Name:"vaibhav",
      //     Email:"vaibhav@gmail.com",
      //     Phno:987456123
      //   },
      //   {
      //     Name:"priyan",
      //     Email:"Priyan@gmail.com",
      //     Phno:123456789
      //   },
      //   {
      //     Name:"Raj",
      //     Email:"Raj@gmail.com",
      //     Phno:654789123
      //   }
      // ]
  }
}
