import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { WeatherModule } from '../weather.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { WeatherService } from '../weather.service';
import { HttpClientModule } from '@angular/common/http';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, WeatherModule, HttpClientModule ],
      declarations: [  ],
      providers: [ WeatherService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Weather in Major Europian cities'`, () => {
    expect(component.title).toEqual('Weather in Major Europian cities');
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Weather in Major Europian cities');
  });

  it(`should have method 'getHourlyForecast'`, () => {
    expect(component.getHourlyForecast).toBeTruthy();
  });

  it('should have an elememnt with class accordion-container', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.accordion-container')).toBeTruthy();
  });

});
