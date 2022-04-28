import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  Url: string;

  constructor(private httpClient: HttpClient) {
    this.Url = AppSettings.API_HOST + 'api/v1/'
  }

  getCategories(): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.Url}category`))
  }

  getCategoryByFriendlyUrl(friendlyUrl: string): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.Url}category/name/${friendlyUrl}`))
  }

}