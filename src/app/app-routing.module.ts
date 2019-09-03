import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'shakes',
    loadChildren: () => import('./shakes/shakes.module').then(mod => mod.ShakesModule)
  },
  {
    path: 'drinks',
    loadChildren: () => import('./drinks/drinks.module').then(mod => mod.DrinksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

