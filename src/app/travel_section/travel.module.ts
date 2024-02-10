import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single/single.component';
import { GoldComponent } from './gold/gold.component';
import { StudentComponent } from './student/student.component';



@NgModule({
  declarations: [
    SingleComponent,
    GoldComponent,
    StudentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TravelModule { }
