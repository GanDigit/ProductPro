import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'core-js/es6/reflect';
@Injectable({
  providedIn: 'root'
})
export class PriceService {
  
  constructor(private http: HttpClient) { }

  public getPrice() {
    console.log("PriceService 1 : ");
    return "101";
  }
}
