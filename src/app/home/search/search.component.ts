import { Component, OnInit } from '@angular/core';
import { Search, PaginationModel, Movie, Autocomplete } from '../../shared/shared.models';
import { Observable, of } from 'rxjs';
import { onSearch } from './store/search.actions';
import { Store } from '@ngrx/store';
import { 
  paginationSelector, 
  moviesSelector, 
  yearsSelector,
  countriesSelector,
  genresSelector,
  autoSelector
} from './store/search.selectors';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  auto$: Observable<Autocomplete>;
  pg$: Observable<PaginationModel>;
  movies$: Observable<Movie[]>;
  pagination$: Observable<PaginationModel>;
  pageSizeOptions: number[] = [25, 50, 100];
  pageEvent: PageEvent;
  search:Search;  
  
  constructor(
    private store: Store
  ) { }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  onPageEvent(evt:PageEvent){
    this.store.dispatch(onSearch({
      search: this.search, 
      pagination: evt
    }));
  }
  
  onSearchStart(evt: Search){
    this.search = evt;
    this.store.dispatch(onSearch({search: evt, pagination: new PaginationModel}));
  }
  
  ngOnInit(): void {
    this.movies$ = this.store.select(moviesSelector);
    this.pg$ = this.store.select(paginationSelector);
    this.auto$ = this.store.select(autoSelector);
  }
}
