import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SelectComponent } from './select/select.component';

import { SharedModule } from '../shared/shared.module';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { ProjectSelectionComponent } from './project-selection/project-selection.component';

@NgModule({
  declarations: [SelectComponent, SelfRegistrationComponent, ProjectSelectionComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
