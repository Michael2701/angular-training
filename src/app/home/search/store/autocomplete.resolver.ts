import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as searchActions from './search.actions';
import { Autocomplete } from '../../../shared/shared.models';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class AutocompleteResolver implements Resolve<Autocomplete>{

    constructor(
        private store: Store
    ){}

    resolve(route: ActivatedRouteSnapshot, router: RouterStateSnapshot)
    : Observable<any>|Promise<any>|any
    {
        this.store.dispatch(searchActions.onAutocomplete());
        return true;
    }
}