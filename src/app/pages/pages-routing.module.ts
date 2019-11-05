import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectSelectionComponent } from './project-selection/project-selection.component';
import { SelectComponent } from './select/select.component';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';

const routes: Routes = [
  { path: "", redirectTo: "select", pathMatch: "full" },
  { path: "project-selection", component: ProjectSelectionComponent },
  { path: "select", component: SelectComponent },
  { path: "self-reg", component: SelfRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
