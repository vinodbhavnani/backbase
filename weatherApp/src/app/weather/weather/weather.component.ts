import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../weather.service';
import { IGroupWeather, IHourlyForecast } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  public title = 'Weather in Major Europian cities';
  private cities: number[];
  public panelOpenState = false;
  public initialData: any;
  public forecastData: any;
  constructor( private weatherService: WeatherService ) {
    // Assuming here that the developer knows the city codes.
    // If he does not know, he can change the param type to string[] to pass city names. He can then get the city IDs,
    // from cities.json in assets.
    // You can import the JSON as a module. Necessary changes have been made to tsconfig.json to read json as a module
    this.cities = [2759793, 2643744, 2968815, 2950159, 2747891]
  }

  ngOnInit() {
    this.weatherService.getInitialWeather( this.cities ).subscribe( ( res: IGroupWeather ) => {
      this.initialData = res;
      console.log(res);
    }, ( e ) => {
      console.log( e );
      // Todo: Handle errors in an elegant way here
    });
  }

  getHourlyForecast( city: number ) {
    this.refreshForecastData();
    this.weatherService.getHourlyForecastForCity( city ).subscribe ( ( res: IHourlyForecast ) => {
      this.forecastData = res;
      console.log(res);
    }, ( e ) => {
      console.log( e );
      // Todo: Handle errors in an elegant way here
    });
  }

  refreshForecastData() {
    this.forecastData = null;
  }

  ngOnDestroy() {
    // Unsubscribe from any non http based subscriptions.
    // All HTTP based subscriptions will be unsubscribed on their own.
  }
}
