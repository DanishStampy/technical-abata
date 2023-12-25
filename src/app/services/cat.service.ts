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
  first_page_url: string;
  last_page_url: string;
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getAllCat(url: string = `${environment.baseUrl}?limit=10`): Observable<CatApi> {
    return this.http.get<CatApi>(
      `${url}`
    )
  }
}
