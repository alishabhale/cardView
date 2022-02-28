import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct() {
    return this.http.get<any>("https://60d779a5307c300017a5f8bb.mockapi.io/productlist")
    .pipe(map((res:any) => {
      return res;
    }))
  }
}



//https://fakestoreapi.com/products/

