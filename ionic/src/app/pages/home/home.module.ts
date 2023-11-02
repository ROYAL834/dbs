import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { UserRouteAccessService } from 'src/app/services/auth/user-route-access.service';
import { HomePage } from './home.page';
import { FileSelectDirective } from 'ng2-file-upload';
import { MultiFileUploadPage } from '../../multi-file-upload/multi-file-upload.page';
import { FileUploadModule } from 'ng2-file-upload';
import { File } from '@ionic-native/file/ngx';
import { HTTP } from '@ionic-native/http/ngx';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    data: {
      authorities: ['ROLE_USER'],
    },
    canActivate: [UserRouteAccessService],
  },
];

@NgModule({
  imports: [IonicModule, CommonModule, FileUploadModule,FormsModule, TranslateModule, RouterModule.forChild(routes)],
  declarations: [HomePage, MultiFileUploadPage ],
  providers: [File, HTTP]
  
})
export class HomePageModule {}
