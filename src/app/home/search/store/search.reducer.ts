import { createReducer, on } from "@ngrx/store";
import { Search, PaginationModel, Movie, Autocomplete } from 'src/app/shared/shared.models';
import * as fromSearchActions from "./search.actions";

export class SearchState{
    search: Search;
    pagination: PaginationModel;
    movies: Movie[];
    autocomplete: Autocomplete
} 

export const initialState = {
    search: {},
    pagination: new PaginationModel,
    movies: [],
    autocomplete: new Autocomplete
}

export const searchReducer = createReducer(
    initialState,
    on(fromSearchActions.onSearchSuccess, (state, action) => {
        return {
            ...state,
            movies: action.movies,
            pagination: action.pagination
        }
    }),
    on(fromSearchActions.onSearchFail, (state, action) => {
        return { ...state };
    }),

    on(fromSearchActions.onAutocompleteSuccess, (state,action) => {
        return {
            ...state,
            autocomplete: action
        }
    })
)

