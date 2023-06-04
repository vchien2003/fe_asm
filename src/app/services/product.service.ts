import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get<IProduct[]>(
      'https://asmbe.vercel.app/api/products'
    );
  }

  getProuctById(id: string): Observable<any> {
    return this.http.get<IProduct>(
      `https://asmbe.vercel.app/api/products/${id}`
    );
  }

  createProuct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(
      'https://asmbe.vercel.app/api/products',
      product
    );
  }

  updateProuct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      `https://asmbe.vercel.app/api/products/${product._id}`,
      product
    );
  }

  deleteProuct(id: string): Observable<IProduct> {
    return this.http.delete<IProduct>(
      `https://asmbe.vercel.app/api/products/${id}`
    );
  }
}
