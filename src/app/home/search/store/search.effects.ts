import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, tap, map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { SearchService } from '../search.service';
import { 
    onSearch, 
    onSearchFail, 
    onSearchSuccess, 
    onAutocomplete, 
    onAutocompleteSuccess, 
    onAutocompleteFail 
} from './search.actions';
import { of } from 'rxjs';


@Injectable()
export class SearchEffects {
    constructor(
        private actions$: Actions,
        private searchService: SearchService
    ) { }

    searchMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(onSearch),
            tap((action) => console.log("from effects",action)),
            concatMap((action) => {
                return this.searchService.searchMovies(action)
                .pipe(
                    map((data) => {
                        console.log("from search effects: ",data);
                        return onSearchSuccess({
                            movies: data.movies, 
                            pagination: {
                                length: data.length,
                                pageIndex: data.pageIndex,
                                pageSize: data.pageSize
                            } 
                        })

                    }),
                    catchError(errors => {
                        let errorMessage = 'An unknown error occurred!';
                        console.log(errors);
                        if (!errors.error || !errors.error.error) {
                            return of(onSearchFail({error: errorMessage}));
                        }
                        return of(onSearchFail({error: errorMessage}));
                    })
                )
            })
        )
    )

    getAutocomplete = createEffect(() => 
    this.actions$.pipe(
        ofType(onAutocomplete),
        concatMap((action) => {
            return this.searchService.getAutocomplete()
            .pipe(
                map((data) => {
                    return onAutocompleteSuccess({
                        countries: data.countries,
                        years: data.years,
                        genres: data.genres
                    })
                }),
                catchError(errors => {
                    let errorMessage = 'An unknown error occurred!';
                    console.log(errors);
                    if (!errors.error || !errors.error.error) {
                        return of(onAutocompleteFail());
                    }
                    return of(onAutocompleteFail());
                })
            )
        })        

    )
)
}














