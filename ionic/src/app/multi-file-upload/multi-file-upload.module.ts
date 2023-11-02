import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiFileUploadPageRoutingModule } from './multi-file-upload-routing.module';

import { MultiFileUploadPage } from './multi-file-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiFileUploadPageRoutingModule
  ],
  declarations: [MultiFileUploadPage]
})
export class MultiFileUploadPageModule {}
