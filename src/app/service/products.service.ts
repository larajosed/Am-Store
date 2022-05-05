import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private Url: string;

  constructor(private httpClient: HttpClient) {
    this.Url = AppSettings.API_HOST + 'api/v1/'
  }

  getRandomProducts(): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.Url}products`))
  }

  getDetailProduct(friendlyUrl: string): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.Url}products/slug/${friendlyUrl}`))
  }

  getByCategory(categoryId: number): Promise<any> {
    let parameters = new HttpParams();
    parameters = parameters.set('category', categoryId);
    return firstValueFrom(this.httpClient.get(`${this.Url}products`, { params: parameters }));
  }
}
