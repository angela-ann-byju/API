import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Apiservices {

  base = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get(this.base);
  }

  getSingleProduct(id: string) {
    return this.http.get(`${this.base}/${id}`);
  }
}
