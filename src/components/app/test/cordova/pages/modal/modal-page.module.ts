import { NgModule } from '@angular/core';
import { IonicPageModule } from '../../../../../..';

import { ModalPage } from './modal-page';

@NgModule({
  declarations: [
    ModalPage
  ],
  imports: [
    IonicPageModule.forChild(ModalPage)
  ],
  entryComponents: [
    ModalPage
  ]
})
export class ModalPageModule {}
