import {Component} from '@angular/core';
import {UserdataService} from "./services/userdata.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdProject';
  users: any


  constructor(private userdata: UserdataService) {

    this.userdata.users().subscribe((data) => {
      console.log(data)
      this.users=data
    })
  }
}
