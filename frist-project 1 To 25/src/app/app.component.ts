import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frist-project'
  data = 'Vaibhav'

  getValue() {
    alert('my fuction are calling....!!!!')
  }

  // multiple parameter pass
  mysecond(name: string, secondname: string) {
    alert(name)
    alert(secondname)
  }

  mythird(value: number) {
    alert(value)
  }

  myfunction(val: boolean) {
    alert(val)
  }

  getData(val: string) {
    console.log(val)
  }

  // get value from input box
  displayvalue: string = ' '

  getValueinput(val: string) {
    console.log(val)
    this.displayvalue = val
  }

  count: number = 0

  counter(type: string) {
    type === 'add' ? this.count++ : this.count--
  }

  name = 'vaibhav'
  disable = false

  // if else
  show = "vaibhav"
  color = "skyblue"

  // for loop
  // users = ["vaibhav", "bhanderi", "priyan", "raj", "nevil", "kaushal", "faizan"]
  // usersDetailes = [
  //   {
  //     name: "vaibhav1", email: "vaibhav1@Gmail.com", phoneNo: "897456123"
  //   },
  //   {
  //     name: "vaibhav2", email: "vaibhav2@Gmail.com", phoneNo: "897456123"
  //   },
  //   {
  //     name: "vaibhav3", email: "vaibhav3@Gmail.com", phoneNo: "897456123"
  //   },
  //   {
  //     name: "vaibhav4", email: "vaibhav4@Gmail.com", phoneNo: "897456123"
  //   },
  //   {
  //     name: "vaibhav5", email: "vaibhav5@Gmail.com", phoneNo: "897456123"
  //   },
  //   {
  //     name: "vaibhav6", email: "vaibhav6@Gmail.com", phoneNo: "897456123"
  //   }
  //
  // ]


//  nested loop angular

  users = [
    {
      name: "vaibhav6", email: "vaibhav6@Gmail.com", phoneNo: "897456123", socialaccount: [
        {
          instragram: "vaibhav_2030"
        },
        {
          linkdin: "vaibhav_2032"
        },
        {
          facebook: "vaibhav_2032"
        }
      ]
    },
    {
      name: "priyan", email: "priyan6@Gmail.com", phoneNo: "897456123", socialaccount: [
        {
          instragram: "priyan_2030"
        },
        {
          linkdin: "priyan_2032"
        },
        {
          facebook: "priyan_2032"
        }
      ]
    }

  ]

// style binding
color1="red"
bgcolor1="yellow"
  change(){
    this.color1="blue"
    this.bgcolor1="orange"
  }

//  toggle
  display=true
  toggle(){
    this.display=!this.display
  }



}
