import { createAction, props } from "@ngrx/store";
import { PaginationModel , Movie } from '../../../shared/shared.models'

export const onGetMovies = createAction(
    "[MAIN COMPONENT] onGetMovies",
    props<PaginationModel>()
)
export const onMoviesReseived = createAction(
    "[MAIN COMPONENT] onMoviesReseived",
    props<{movies: Movie[], pagination: PaginationModel}>()
)
export const onFailedGetMovies = createAction(
    "[MAIN COMPONENT] onFailedGetMovies",
    props<{err: string}>()
)
