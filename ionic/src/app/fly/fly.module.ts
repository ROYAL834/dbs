import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlyPageRoutingModule } from './fly-routing.module';

import { FlyPage } from './fly.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlyPageRoutingModule
  ],
  declarations: [FlyPage]
})
export class FlyPageModule {}
