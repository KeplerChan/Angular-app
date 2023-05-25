import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { S3PageRoutingModule } from './s3-routing.module';

import { S3Page } from './s3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    S3PageRoutingModule
  ],
  declarations: [S3Page]
})
export class S3PageModule {}
