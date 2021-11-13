import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  isClicked : boolean;
  isShowKey : boolean = false;
  currentIndex : number;
  currentPassword: String;
  newUserName  : String;
  userNameArray : String[] = [];
  passwordArray : String[] = [];
 
  constructor() { 
    this.isClicked = false;
  }

  ngOnInit(): void {
  }
  onSubmit = () => {
    this.isClicked = true;
    this.userNameArray.push(this.newUserName);
    console.log(this.userNameArray+Math.random().toString());
    this.passwordArray.push(this.userNameArray+Math.random().toString());
  }

  showPassword = (index) => {
    this.currentIndex = index;
    this.isShowKey = true;
    this.currentPassword = this.passwordArray[index];
  }

}
