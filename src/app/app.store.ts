import { createSelector } from 'reselect';
import { ActionReducer, Store } from '@ngrx/store';
import { environment } from '../environments/environment';
import { compose } from '@ngrx/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
// Form Designer State and Reducer
import { FormDesignerState, FormDesignerReducer } from './form-designer/store/form-designer.reducer';

export interface AppState {
    authModule: FormDesignerState;
}

export class initialState implements AppState {
    authModule: FormDesignerState;
}

const reducers = {
    authModule: FormDesignerReducer
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

// export function getState(store: Store<AppState>): AppState {
//     let state: AppState;

//     store.take(1).subscribe(s => state = s);

//     return state;
// }

// Selectors
