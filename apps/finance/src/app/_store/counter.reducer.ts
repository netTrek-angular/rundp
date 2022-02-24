import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const counterFeatureKey = 'counter';

export const reducer = createReducer(
  0,
  on(CounterActions.loadCounters, state => state),
);
