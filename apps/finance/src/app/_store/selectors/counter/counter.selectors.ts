import { createFeatureSelector, createSelector } from '@ngrx/store';
import {counterFeatureKey, CounterState} from "../../reducers/counter/counter.reducer";


export interface AppState {
  [counterFeatureKey]: CounterState;
}



export const selectCounter = createFeatureSelector<CounterState> ( counterFeatureKey );

export const selectFeatureCountVal = createSelector(
  selectCounter,
  (state: CounterState) => state.val
);
