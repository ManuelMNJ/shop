import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../models/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  http = inject(HttpClient);

  getProviders() {
    return this.http.get<Provider[]>('./providers.json');
  }

  getProviderById(id: number) {
    return this.http.get<Provider[]>('./providers.json');
  }
}