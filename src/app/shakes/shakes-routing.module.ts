import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShakesDetailComponent } from './shakes-detail/shakes-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ShakesDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShakesRoutingModule { }
