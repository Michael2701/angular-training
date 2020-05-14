import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Search } from '../../../shared/shared.models';
import { Observable } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})

export class SearchFormComponent implements OnInit {
  @Output() onSearchEvent = new EventEmitter<Search>();
  @Input() years: string[];
  @Input() countries: string[];
  @Input() genres: string[];

  searchForm: FormGroup;
  genre = new FormControl(null, Validators.minLength(3));
  country = new FormControl(null, Validators.minLength(3));
  year = new FormControl(null, Validators.minLength(3));

  filteredGenreOptions: Observable<string[]>;
  filteredYearsOptions: Observable<string[]>;
  filteredCountryOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      author: new FormControl(null, Validators.minLength(3)),
      title: new FormControl(null, Validators.minLength(3)),
      country: this.country,
      genre: this.genre,
      year: this.year
    });

    this.filteredGenreOptions = this.genre.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGenre(value))
    );

    this.filteredCountryOptions = this.country.valueChanges.pipe(
      startWith(''),
      map(value => this._filterCountry(value))
    );

    this.filteredYearsOptions = this.year.valueChanges.pipe(
      startWith(''),
      map(value => this._filterYear(value))
    );
  }

  private _filterGenre(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (!this.genres) return this.genres;
    return this.genres.filter(genre => genre.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterCountry(value: string): string[] {
    const filterValue = value.toLowerCase();
    if (!this.countries) return this.countries;
    return this.countries.filter(country => country.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterYear(value: string): string[] {
    if (!this.years) return this.years;
    return this.years.filter(year => year.toString().indexOf(value) === 0);
  }

  onSubmit() {
    this.onSearchEvent.emit(this.searchForm.value);
  }
}
