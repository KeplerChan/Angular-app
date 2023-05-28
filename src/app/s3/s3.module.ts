import { NgModule, CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S3PageRoutingModule } from './s3-routing.module';

import { S3Page } from './s3.page';
import { S4PageModule } from '../s4/s4.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S3PageRoutingModule
  ],
  declarations: [S3Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  exports:[S3Page]
})
export class S3PageModule {

}
