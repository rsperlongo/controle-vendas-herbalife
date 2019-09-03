import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShakesRoutingModule } from './shakes-routing.module';
import { ShakesDetailComponent } from './shakes-detail/shakes-detail.component';

@NgModule({
  declarations: [ShakesDetailComponent],
  imports: [
    CommonModule,
    ShakesRoutingModule
  ],
})
export class ShakesModule { }
