import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopServices {

  public urlApi='https://www.mocky.io/v2/5ed0b4443500005b00ff9e02'

  constructor(private http: HttpClient) { }

  getApi():Observable<any>{
    let dataApi = this.http.get(this.urlApi)
    return dataApi
  }

  

  
}
