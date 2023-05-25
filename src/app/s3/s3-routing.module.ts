import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { S3Page } from './s3.page';

const routes: Routes = [
  {
    path: '',
    component: S3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class S3PageRoutingModule {}
