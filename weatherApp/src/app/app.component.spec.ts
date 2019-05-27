import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { HttpProxyService } from './shared/services/http-proxy/http-proxy.service';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        WeatherModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        WelcomeComponent,
        NotFoundComponent
      ],
      providers: [     ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'weatherApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('weatherApp');
  });

  xit('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to weatherApp!');
  });
});
