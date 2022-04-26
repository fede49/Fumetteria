import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.page.html',
  styleUrls: ['./tabella.page.scss'],
})
export class TabellaPage implements OnInit {
 
  celsius: number;
  fahrenheit: number;
  kilometri: number;
  miglia: number;

  constructor() { }
  
  cambioCelsius(celsius:number): void {  
    this.fahrenheit = ((this.celsius *1.8) + 32);
  }
  cambioFahrenheit(fahrenheit: number): void {  
    this.celsius = ((fahrenheit -32) * (5 / 9));
  }
  cambioKm(kilometri: number): void {  
    this.miglia = (kilometri* 0.6214);
  }
  cambioMi(miglia: number): void {  
    this.kilometri = (miglia * 1.609);
  }

  ngOnInit() {
  }

}
