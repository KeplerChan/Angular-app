import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S4PageRoutingModule } from './s4-routing.module';

import { S4Page } from './s4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S4PageRoutingModule
  ],
  declarations: [S4Page]
})
export class S4PageModule {}
