export interface ICityWeather {
  coord: { lon: number, lat: number };
  sys: { timezone: number, country: string, sunrise: number, sunset: number};
  weather: [{id: number, main: string, description: string, icon: string}];
  main: {temp: number, humidity: number, pressure: number, temp_min: number, temp_max: number};
  wind: {speed: number, deg: number};
  clouds: {all: number};
  dt: number;
  id: number;
  name: string;
}

export interface IGroupWeather {
  cnt: number;
  list: ICityWeather[];
}

export interface IHourlyWeather {
  clouds: {all: number};
  dt: number;
  dt_txt: string;
// tslint:disable-next-line: max-line-length
  main: {grnd_level: number, sea_level: number, temp: number, humidity: number, pressure: number, temp_min: number, temp_kf: number, temp_max: number};
  sys: { pod: string };
  weather: [{id: number, main: string, description: string, icon: string}];
  wind: {speed: number, deg: number};
}

export interface IHourlyForecast {
  city: {id: number, name: string, country: string, coord:{lat: number, lon: number}, timezone: number};
  cnt: number;
  cod: string;
  list: IHourlyWeather[]
}
