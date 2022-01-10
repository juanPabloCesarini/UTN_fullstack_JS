import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url:string = 'https://fakestoreapi.com/products/';

  constructor(private http: HttpClient) { }

  getProductos():Observable<any> {
    return this.http.get(this.url);
  }

}
