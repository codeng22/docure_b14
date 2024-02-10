import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvantageComponent } from './advantage/advantage.component';
import { MaxProtectComponent } from './max-protect/max-protect.component';
import { BoosterComponent } from './booster/booster.component';



@NgModule({
  declarations: [
    AdvantageComponent,
    MaxProtectComponent,
    BoosterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HealthModule { }
