import { TestBed } from '@angular/core/testing';
import { HttpProxyService } from './http-proxy.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


describe('HttpProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule, HttpClientModule ],
    providers: [ ]
  }));

  it('should be created', () => {
    const service: HttpProxyService = TestBed.get(HttpProxyService);
    expect(service).toBeTruthy();
  });
});
