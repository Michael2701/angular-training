import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { onGetMovies } from './home/main/store/main.actions'
import { PaginationModel } from './shared/shared.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  constructor(
    private store: Store
  ){}

  ngOnInit(){
    // this.store.dispatch(onGetMovies(new PaginationModel));
  }
}
