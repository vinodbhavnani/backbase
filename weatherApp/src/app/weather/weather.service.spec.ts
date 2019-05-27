import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { HttpProxyService } from '../shared/services/http-proxy/http-proxy.service';
import { WeatherModule } from './weather.module';
import { HttpClientModule } from '@angular/common/http';
import { IGroupWeather, ICityWeather, IHourlyForecast } from '../shared/models/weather.model';
import { environment } from 'src/environments/environment';

describe('WeatherService', () => {

  let httpTestingController: HttpTestingController;
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, WeatherModule],
      providers: [HttpProxyService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(WeatherService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getInitialWeather method', () => {
    expect(service.getInitialWeather).toBeTruthy();
  });

  it('should have getHourlyForecastForCity method', () => {
    expect(service.getHourlyForecastForCity).toBeTruthy();
  });

  it('should get weather of 5 cities', () => {
    const serviceName = 'group';
    const params = '?id=2759793,2643744,2968815,2950159,2747891&units=metric&APPID=' + environment.apiKey;
    const cities = [2759793, 2643744, 2968815, 2950159, 2747891];
    const dummyWeather: IGroupWeather = {
      cnt: 5,
      list: [{
        clouds: {all: 75},
        coord: {lon: 2.35, lat: 48.85},
        dt: 1558965672,
        id: 2968815,
        main: {temp: 19.97, pressure: 1012, humidity: 52, temp_min: 19, temp_max: 21.11},
        name: 'Paris',
        sys: {country: 'FR', timezone: 7200, sunrise: 1558929367, sunset: 1558985979},
        wind: {speed: 7.7, deg: 250},
        weather: [{id: 801, main: 'Clouds', description: 'few clouds', icon: '02d'}]
      }, {
        clouds: {all: 75},
        coord: {lon: 2.35, lat: 48.85},
        dt: 1558965672,
        id: 2968815,
        main: {temp: 19.97, pressure: 1012, humidity: 52, temp_min: 19, temp_max: 21.11},
        name: 'Gemeente Amsterdam',
        sys: {country: 'NL', timezone: 7200, sunrise: 1558929367, sunset: 1558985979},
        wind: {speed: 7.7, deg: 250},
        weather: [{id: 801, main: 'Clouds', description: 'few clouds', icon: '02d'}]
      }, {
        clouds: {all: 75},
        coord: {lon: 2.35, lat: 48.85},
        dt: 1558965672,
        id: 2968815,
        main: {temp: 19.97, pressure: 1012, humidity: 52, temp_min: 19, temp_max: 21.11},
        name: 'City of London',
        sys: {country: 'GB', timezone: 7200, sunrise: 1558929367, sunset: 1558985979},
        wind: {speed: 7.7, deg: 250},
        weather: [{id: 801, main: 'Clouds', description: 'scaterred clouds', icon: '02d'}]
      }, {
        clouds: {all: 75},
        coord: {lon: 2.35, lat: 48.85},
        dt: 1558965672,
        id: 2968815,
        main: {temp: 19.97, pressure: 1012, humidity: 52, temp_min: 19, temp_max: 21.11},
        name: 'Berlin',
        sys: {country: 'DE', timezone: 7200, sunrise: 1558929367, sunset: 1558985979},
        wind: {speed: 7.7, deg: 250},
        weather: [{id: 801, main: 'Clouds', description: 'broken clouds', icon: '02d'}]
      }, {
        clouds: {all: 75},
        coord: {lon: 2.35, lat: 48.85},
        dt: 1558965672,
        id: 2968815,
        main: {temp: 19.97, pressure: 1012, humidity: 52, temp_min: 19, temp_max: 21.11},
        name: 'Rotterdam',
        sys: {country: 'NL', timezone: 7200, sunrise: 1558929367, sunset: 1558985979},
        wind: {speed: 7.7, deg: 250},
        weather: [{id: 801, main: 'Clouds', description: 'light rain', icon: '02d'}]
      }]
    };

    service.getInitialWeather( cities ).subscribe(( res: IGroupWeather ) => {
      expect( res.cnt ).toBe( 5 );
      expect( res.list.length ).toBe( 5 );
    });

    const req = httpTestingController.expectOne( environment.endPoint + serviceName + params );
    expect( req.request.method ).toBe( 'GET' );
    req.flush( dummyWeather );
  });

  it('should get hourly forecast of required city', () => {
    const serviceName = 'forecast';
    const params = '?id=2759793&APPID=' + environment.apiKey;
    const city = 2759793;
    const dummyForecast: IHourlyForecast = {
      city: {id: 2759793, name: 'Gemeente Amsterdam', coord: {lat: 52.3667, lon: 4.8833}, country: 'NL', timezone: 7200},
      cnt: 5,
      cod: '200',
      list: [{
        clouds: {all: 37},
        dt: 1558980000,
        dt_txt: '2019-05-27 18:00:00',
        // tslint:disable-next-line: max-line-length
        main: {temp: 289.76, temp_min: 286.9, temp_max: 289.76, pressure: 1006.8, sea_level: 1006.8, grnd_level: 1006.91, humidity: 76, temp_kf: 2.86},
        sys: {pod: 'd'},
        weather: [{id: 500, main: 'Rain', description: 'overcast clouds', icon: '10d'}],
        wind: {speed: 6.74, deg: 248.412}
      }, {
        clouds: {all: 37},
        dt: 1558980000,
        dt_txt: '2019-05-27 21:00:00',
        // tslint:disable-next-line: max-line-length
        main: {temp: 289.76, temp_min: 286.9, temp_max: 289.76, pressure: 1006.8, sea_level: 1006.8, grnd_level: 1006.91, humidity: 76, temp_kf: 2.86},
        sys: {pod: 'd'},
        weather: [{id: 500, main: 'Rain', description: 'scattered clouds', icon: '10d'}],
        wind: {speed: 6.74, deg: 248.412}
      }, {
        clouds: {all: 37},
        dt: 1558980000,
        dt_txt: '2019-05-27 00:00:00',
        // tslint:disable-next-line: max-line-length
        main: {temp: 289.76, temp_min: 286.9, temp_max: 289.76, pressure: 1006.8, sea_level: 1006.8, grnd_level: 1006.91, humidity: 76, temp_kf: 2.86},
        sys: {pod: 'd'},
        weather: [{id: 500, main: 'Rain', description: 'light rain', icon: '10d'}],
        wind: {speed: 6.74, deg: 248.412}
      }, {
        clouds: {all: 37},
        dt: 1558980000,
        dt_txt: '2019-05-27 03:00:00',
        // tslint:disable-next-line: max-line-length
        main: {temp: 289.76, temp_min: 286.9, temp_max: 289.76, pressure: 1006.8, sea_level: 1006.8, grnd_level: 1006.91, humidity: 76, temp_kf: 2.86},
        sys: {pod: 'd'},
        weather: [{id: 500, main: 'Rain', description: 'few clouds', icon: '10d'}],
        wind: {speed: 6.74, deg: 248.412}
      }, {
        clouds: {all: 37},
        dt: 1558980000,
        dt_txt: '2019-05-27 06:00:00',
        // tslint:disable-next-line: max-line-length
        main: {temp: 289.76, temp_min: 286.9, temp_max: 289.76, pressure: 1006.8, sea_level: 1006.8, grnd_level: 1006.91, humidity: 76, temp_kf: 2.86},
        sys: {pod: 'd'},
        weather: [{id: 500, main: 'Rain', description: 'light rain', icon: '10d'}],
        wind: {speed: 6.74, deg: 248.412}
      }]
    };
    service.getHourlyForecastForCity( city ).subscribe(( res: IHourlyForecast ) => {
      expect( res.cnt ).toBe( 5 );
      expect( res.list.length ).toBe( 5 );
    });

    const req = httpTestingController.expectOne( environment.endPoint + serviceName + params );
    expect( req.request.method ).toBe( 'GET' );
    req.flush( dummyForecast );
  });
});
