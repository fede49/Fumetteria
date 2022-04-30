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
    if(this.username !=null &&  this.password !=null){
      
     alert ("Ciao " + this.username  + ". " +"La tua password è " + this.password);
}
    
else  alert("username o password non validi")

  } 



  ngOnInit() {
  }

}
