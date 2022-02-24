import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';

export const selectCounterState = createFeatureSelector<number>(
  fromCounter.counterFeatureKey
);
