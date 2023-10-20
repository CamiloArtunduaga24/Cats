import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RootCats } from '../interfaces/cats.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlApi = environment.API_KEY;

  constructor(
    private readonly http: HttpClient
  ) { }

  getApi() {
    const url = this.urlApi;
    return this.http.get<RootCats>(url);
  }
}
