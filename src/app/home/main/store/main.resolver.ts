import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as mainActions from './main.actions';
import { Movie, PaginationModel } from '../../../shared/shared.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class MainResolver implements Resolve<Movie[]>{

    constructor(
        private store: Store
    ){}

    resolve(route: ActivatedRouteSnapshot, router: RouterStateSnapshot)
    : Observable<any>|Promise<any>|any
    {
        this.store.dispatch(mainActions.onGetMovies(new PaginationModel));
        return true;
    }
}