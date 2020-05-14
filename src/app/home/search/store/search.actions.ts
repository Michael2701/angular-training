import { createAction, props } from "@ngrx/store";
import { Search, PaginationModel, Movie, Error } from "../../../shared/shared.models";

export const onSearch = createAction(
    "[SEARCH COMPONENT] onSearch",
    props<{ 
        search: Search,
        pagination: PaginationModel
    }>()
)

export const onSearchSuccess = createAction(
    "[SEARCH COMPONENT] onSearchSuccess",
    props<{
        pagination: PaginationModel,
        movies: Movie[]
    }>()
)

export const onSearchFail = createAction(
    "[SEARCH COMPONENT] onSearchFail",
    props<Error>()
)

export const onAutocomplete = createAction(
    "[SEARCH COMPONENT] onAutocomplete"
)

export const onAutocompleteSuccess = createAction(
    "[SEARCH COMPONENT] onAutocompleteSucces",
    props<{
        countries: any,
        years: any,
        genres: any
    }>()
)

export const onAutocompleteFail = createAction(
    "[SEARCH COMPONENT] onAutocompleteFail"
)