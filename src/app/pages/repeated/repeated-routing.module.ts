import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepeatedComponent } from './repeated.component';

const routes: Routes = [
  { path: '', component: RepeatedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepeatedRoutingModule { }
