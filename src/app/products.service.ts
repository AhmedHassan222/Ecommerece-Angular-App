import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }
  getProductsByType(type:string):Observable<any> {
    return this._HttpClient.get(`https://rus-digital-televisions.onrender.com/${type}`)
  }
}
