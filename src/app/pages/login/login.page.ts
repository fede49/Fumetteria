import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string;
  password:string;

  constructor() {}

  clickDiLogin():void{
    alert("Ciao " + this.username  + ". " +"La tua password è " + this.password);
  }

  ngOnInit() {
  }

}
