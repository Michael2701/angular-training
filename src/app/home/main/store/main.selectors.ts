import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from '../../store/home.reducer';


export const homeSelector = createFeatureSelector<HomeState>('home');

export const mainSelector = createSelector(
    homeSelector,
    home => home.main
)

export const paginationSelector = createSelector(
    mainSelector,
    main => main.pagination
)

export const moviesSelector = createSelector(
    mainSelector,
    main => main.movies
)

