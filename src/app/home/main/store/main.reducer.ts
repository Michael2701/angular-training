import { createReducer, on } from "@ngrx/store";
import { PaginationModel, Movie } from '../../../shared/shared.models';
import * as mainActions from './main.actions';


export class MainState{
    movies: Movie[];
    pagination: PaginationModel;
}

export const initialState = {
    movies: [],
    pagination: new PaginationModel
};

export const mainReducer = createReducer(
    initialState,
    on(mainActions.onMoviesReseived, (state, action) => {
        return {
            ...state,
            movies: action.movies,
            pagination: action.pagination
        }
    }),
    on(mainActions.onFailedGetMovies, (state, action) => {
        console.error(action);
        return {
            ...state
        }
    })
)