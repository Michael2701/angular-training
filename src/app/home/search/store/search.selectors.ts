import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '../../store/home.reducer';

export const homeSelector = createFeatureSelector<HomeState>('home');
export const searchSelector = createSelector(
    homeSelector,
    home => home.search
)
export const moviesSelector = createSelector(
    searchSelector,
    search => search.movies
)
export const paginationSelector = createSelector(
    searchSelector,
    search => search.pagination
)
export const srchSelector = createSelector(
    searchSelector,
    search => search.search
)

export const autoSelector = createSelector(
    searchSelector,
    search => search.autocomplete
)

export const countriesSelector = createSelector(
    autoSelector,
    auto => auto.countries
)

export const genresSelector = createSelector(
    autoSelector,
    auto => auto.genres
)

export const yearsSelector = createSelector(
    autoSelector,
    auto => auto.years
)
