import { Injectable } from "@angular/core";
import * as MainActions from "./main.actions";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { concatMap, tap, map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { MainService } from '../main.service';
import { of } from 'rxjs';

@Injectable()
export class MainEffects {
    constructor(
        private actions$: Actions,
        private mainService: MainService
    ) { }

    getMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MainActions.onGetMovies),
            concatMap((action) => {
                return this.mainService.getMovies({pagination:action})
                    .pipe(
                        map((data) => {
                            return MainActions.onMoviesReseived({ 
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
                                return of(MainActions.onFailedGetMovies({err: JSON.stringify(errors) }));
                            }
                            return of(MainActions.onFailedGetMovies({err: JSON.stringify(errors) }));
                        })
                    )
            })
        )
        // ,{dispatch: false}
    );
}
