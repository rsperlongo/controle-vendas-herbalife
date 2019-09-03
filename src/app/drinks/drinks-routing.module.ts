import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsDetailComponent } from '../clients/clients-detail/clients-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinksRoutingModule { }
