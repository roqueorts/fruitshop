import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Purchase } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl: string;
  private purchaseUrl: string;

  constructor(private http: HttpClient) {
    this.productsUrl = 'http://localhost:8080/products';
    this.purchaseUrl = 'http://localhost:8080/purchase';
  }

  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  public save(product: Product) {
    return this.http.post<Product>(this.productsUrl, product);
  }

  public purchase(purchase: Array<Purchase>) {

    return this.http.post<Array<Purchase>>(this.purchaseUrl, purchase);
  }

}
