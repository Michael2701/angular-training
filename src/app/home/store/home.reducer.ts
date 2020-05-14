import { ActionReducerMap } from '@ngrx/store';

import * as fromMain from '../main/store/main.reducer';
import * as fromSearch from '../search/store/search.reducer';

export interface HomeState{
    main: fromMain.MainState,
    search: fromSearch.SearchState
}

export const homeReducer: ActionReducerMap<HomeState> = {
    main: fromMain.mainReducer,
    search: fromSearch.searchReducer
}