import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../../shared/shared.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl = "http://api.my/api/";

  constructor(
    private http: HttpClient
  ) { }

  getMovies(action) {
    return this.http.post<{
      movies: Movie[],
      length: string,
      pageIndex: string,
      pageSize: string
    }>(this.baseUrl + 'searchMovies', { 
      search: action['search'], 
      pagination: action['pagination'] 
    });
  }
}
