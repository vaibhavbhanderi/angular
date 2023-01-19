import { Component } from '@angular/core';
import {UserdataService} from "../services/userdata.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  users: any = ''
  constructor(private userdata: UserdataService) {
    this.userdata.users().subscribe((data) => {
      console.log(data)
      this.users=data
    })
  }
}
