import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Cat {
  breed: string,
  coat: string,
  country: string,
  origin: string,
  pattern: string,
  [key: string]: string;
}

export interface CatApi {
  data: Cat[];
  page: number;
  results: any[];
  links: any;
  from: number;
  to: number;
  total: number;
  last_page: number;
  total_pages: number;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getAllCat(pageNumber: number = 1, limit: number = 10): Observable<CatApi> {
    return this.http.get<CatApi>(
      `${environment.baseUrl}?limit=${limit}&page=${pageNumber}`
    )
  }
}
