import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esercizio',
  templateUrl: './esercizio.page.html',
  styleUrls: ['./esercizio.page.scss'],
})
export class EsercizioPage implements OnInit {
  n: number;
  m: number;
  max: number = 0;
  constructor() { }
  pD() {
    for (let i = this.n; i <= this.m; i++) {
  let conta: number = 1;
  let num = i;                                            
  while (num != 1) {
    if (num % 2 == 0) {                                             
      num = num / 2;
    } else {                                                        
      num = 3*num + 1;

    }
    conta++;                                                  

  }
  this.max = this.massimo(conta);

}

  }
massimo(conta: number):number {                   

  return conta > this.max ? conta : this.max;
}


  

  ngOnInit() {
  }

}
