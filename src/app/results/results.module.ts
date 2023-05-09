import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ResultsComponent } from './results.component';
import { ResultsRoutingModule } from './results-routing.module';

@NgModule({
  declarations: [
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ResultsRoutingModule,
  ]
})
export class ResultsModule { }
