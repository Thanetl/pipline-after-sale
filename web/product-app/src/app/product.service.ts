import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}`, { withCredentials: true });
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}`, product, { withCredentials: true });
  }

  updateProduct(id: number, updatedProduct: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, updatedProduct, { withCredentials: true });
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }
}
