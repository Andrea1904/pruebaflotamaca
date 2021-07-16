import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './general';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public url: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }
  getHome(nit: number): Observable<any>{
    
    return  this._http.get(`${this.url}/800220154`)
    
  };

}
