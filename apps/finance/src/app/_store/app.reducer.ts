import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {environment} from "../../environments/environment";
import * as fromTess from "./counter.index";


export const test1FeatureKey = 'test1';

export const reducerTest1 = createReducer(
  0,
);

export const test2FeatureKey = 'test2';

export const reducerTest2 = createReducer(
  0,

);

export interface AppState {
  [test1FeatureKey]: number;
  [test2FeatureKey]: number;
}

export const reducers: ActionReducerMap<AppState> = {
  [test1FeatureKey]: reducerTest1,
  [test2FeatureKey]: reducerTest2,
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [/*debug*/] : [];
