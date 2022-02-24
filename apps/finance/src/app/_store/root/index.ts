import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCounter from './counter.reducer'

export interface AppState {
  [fromCounter.featureKey]: fromCounter.State
}

export const reducers: ActionReducerMap<AppState> = {
  [fromCounter.featureKey]: fromCounter.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
