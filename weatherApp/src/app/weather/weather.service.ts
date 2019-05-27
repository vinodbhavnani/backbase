import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpProxyService } from '../shared/services/http-proxy/http-proxy.service';
import { IGroupWeather, IHourlyForecast } from '../shared/models/weather.model'
import { Observable } from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private http: HttpProxyService) { }

  // Method to get initial weather conditions for 5 cities.
  public getInitialWeather( cities: number[], unit: 'metric' | 'imperial' = 'metric' ): Observable<IGroupWeather> {
    const params = {
      id: cities.join(','),
      units: unit,
      APPID: environment.apiKey
    };
    return this.http.invokeGetRequest( 'group', params );
  }

  public getHourlyForecastForCity( city: number ): Observable<IHourlyForecast> {
    const params = {
      id: city,
      APPID: environment.apiKey
    };
    return this.http.invokeGetRequest( 'forecast', params );
  }

}
