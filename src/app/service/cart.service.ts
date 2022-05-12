import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  Url: string;

  constructor(private httpClient: HttpClient) {
    this.Url = AppSettings.API_HOST + 'api/v1/'
  }

  getCartCode(): String | null {
    return sessionStorage.getItem('cartCode')
  }


  retrieveCartData(): Promise<any> | null {
    var cartCode = this.getCartCode()
    if (cartCode == null) {
      return null;
    }
    return firstValueFrom(this.httpClient.get(`${this.Url}cart/${cartCode}`))
  }

}
