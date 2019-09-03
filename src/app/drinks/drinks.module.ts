import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinksRoutingModule } from './drinks-routing.module';
import { DrinksDetailComponent } from './drinks-detail/drinks-detail.component';

@NgModule({
  declarations: [DrinksDetailComponent],
  imports: [
    CommonModule,
    DrinksRoutingModule
  ]
})
export class DrinksModule { }
