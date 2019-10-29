import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { SelectComponent } from './select/select.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    SetupRoutingModule,
    SharedModule
  ]
})
export class SetupModule { }
