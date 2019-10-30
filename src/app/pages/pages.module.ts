import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SelectComponent } from './select/select.component';

import { SharedModule } from '../shared/shared.module';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';

@NgModule({
  declarations: [SelectComponent, SelfRegistrationComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
