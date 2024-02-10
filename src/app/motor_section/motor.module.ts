import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { BikeComponent } from './bike/bike.component';



@NgModule({
  declarations: [
    CarComponent,
    BikeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MotorModule { }
