import {Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
// parent to child
  // @Input() item:{name:string,Email:string ,Phno:number}={name:'',Email:'',Phno:0}

//child to parent
@Output() updateDataEvent=new EventEmitter<string>()

}
