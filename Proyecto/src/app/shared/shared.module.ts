import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavarComponent } from './navar/navar.component';


@NgModule({
  declarations: [
    NavarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    NavarComponent
  ]
})
export class SharedModule { }
