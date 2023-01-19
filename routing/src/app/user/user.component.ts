import {Component, AfterContentChecked} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterContentChecked {
  constructor(private router: ActivatedRoute) {
  }
Userid:any=""

  ngAfterContentChecked(): void {
    console.log("user id is", this.router.snapshot.paramMap.get("id"))
    this.Userid=this.router.snapshot.paramMap.get("id")
  }

}
