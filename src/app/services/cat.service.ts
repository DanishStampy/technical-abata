import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  data(data: any): unknown;
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getAllCat(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}?page=${page}`
    )
  }
}
