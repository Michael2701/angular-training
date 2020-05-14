import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaginationModel, Movie, Search } from '../../shared/shared.models';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl = "http://api.my/api/";
  constructor(
    private http: HttpClient
  ){}

    searchMovies(data: {
      search: Search,
      pagination: PaginationModel
    }){
      return this.http.post<{
        movies: Movie[],
        length: string,
        pageIndex: string,
        pageSize: string
      }>(this.baseUrl+"searchMovies", data);
    }

    getAutocomplete(){
      return this.http.get<{
        countries: string[],
        years: string[],
        genres: string[]        
      }>(this.baseUrl+'getAutocomplete');
    }

}
