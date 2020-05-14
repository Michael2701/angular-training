import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/shared/shared.models';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  @Input() movies: Movie[];
  constructor() { }

  ngOnInit(): void {
  }

}
