import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PaginationModel, Movie } from '../../shared/shared.models';
import * as mainSelectors from './store/main.selectors';
import { MainState } from './store/main.reducer';
import { PageEvent } from '@angular/material/paginator';
import { onGetMovies } from './store/main.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  pg$: Observable<PaginationModel>;
  movies$: Observable<Movie[]>;
  pageSizeOptions: number[] = [25, 50, 100];
  pageEvent: PageEvent;

  constructor(
    private store: Store
  ) { }


  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  onPageEvent(evt:PageEvent){
    // this.store.dispatch(HomeActions.updatePagination(evt));
    // this.store.dispatch(HomeActions.onPaginationEvent(evt));
    this.store.dispatch(onGetMovies(evt));
  }



  ngOnInit(): void {
    this.movies$ = this.store.select(mainSelectors.moviesSelector)
    this.pg$ = this.store.select(mainSelectors.paginationSelector)
  }

}
