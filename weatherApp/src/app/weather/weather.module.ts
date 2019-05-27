import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherService } from './weather.service';
import { MaterialModule } from '../shared/modules/material/material.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    MaterialModule
  ],
  exports: [MaterialModule],
  providers: [WeatherService]
})
export class WeatherModule { }
