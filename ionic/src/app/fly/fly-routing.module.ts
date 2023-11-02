import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlyPage } from './fly.page';

const routes: Routes = [
  {
    path: '',
    component: FlyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlyPageRoutingModule {}
