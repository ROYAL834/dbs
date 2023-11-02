import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiFileUploadPage } from './multi-file-upload.page';

const routes: Routes = [
  {
    path: '',
    component: MultiFileUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiFileUploadPageRoutingModule {}
