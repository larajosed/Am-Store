import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private Url: string;

  constructor(private httpClient: HttpClient) {
    this.Url = 'http://localhost:8080/api/v1/products'
  }

  getRandomProducts(): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.Url}`))
  }
}
