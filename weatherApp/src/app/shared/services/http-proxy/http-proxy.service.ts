import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpProxyService {

  private endPoint: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor( private http: HttpClient ) {
    this.endPoint = environment.endPoint;
  }

  invokeGetRequest( service: string, param?: any ): Observable<any> {
    return this.http.get( this.endPoint + service, {
      params: param
    } );
  }

  // Can add methods for POST, PUT, DELETE etc. Make sure to add httpOptions (headers) mentioned above

}
