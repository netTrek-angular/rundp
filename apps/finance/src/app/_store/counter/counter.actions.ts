import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] increment CounterState'
);

export const decrement = createAction(
  '[Counter] decrement CounterState'
);

export const setCounterState = createAction(
  '[Counter] set CounterState',
  props<{val: number}>()
);




