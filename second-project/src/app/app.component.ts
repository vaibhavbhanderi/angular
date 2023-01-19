import {Component} from '@angular/core';
import {FormControl,FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Template Driven Form"

//   list: any[] = []
//
//   addtask(val: string) {
//     // console.log(val)
//     this.list.push({id:  this.list.length,name:val})
//
//   }
//   remove(id:number){
// this.list=this.list.filter(item=>item.id!==id)
//   }

  // send data component
  // data = 'vaibhav'

  // update() {
  //   this.data = Math.floor(Math.random() * 10)
  // }
// prent to child
//   userDetails = [
//     {
//       name: "Vaibhav",
//       Email: "vaibhav@gmail.com",
//       Phno: 966333
//     },
//
//     {
//       name: "Priyan",
//       Email: "Priyan@gmail.com",
//       Phno: 966333
//     },
//     {
//       name: "Raj",
//       Email: "Raj@gmail.com",
//       Phno: 966333
//     },
//   ]

  // child to perent
  // data=""
  // updatedata1(item:string){
  //   console.log(item)
  //   this.data=item
  // }


  // two way binding
  // name:any

  // template reference variable
  // getval(item:HTMLInputElement){
  //   console.log(item)
  // }

//  pipes
//    today = Date()
//   users = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}}

//  tempate driven from
// loginuser(item:any){
//   console.log(item)
// }

  // Reactive form
  // loginForm = new FormGroup({
  //   user:new FormControl('vaibhav'),
  //   password:new FormControl("12345")
  // })
  // userlogin(){
  // console.log(this.loginForm.value)
// }

//  directive custom exmple


}
