import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrazionePageRoutingModule } from './registrazione-routing.module';

import { RegistrazionePage } from './registrazione.page';
import { TitoloDevskillComponent } from 'src/app/components/titolo-devskill/titolo-devskill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrazionePageRoutingModule
  ],
  declarations: [RegistrazionePage, TitoloDevskillComponent]
})
export class RegistrazionePageModule {}
