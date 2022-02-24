import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Counter] increment Counters'
);

export const decrement = createAction(
  '[Counter] decrement Counters'
);

export const setValue = createAction(
  '[Counter] set value Counters',
  props<{val:number}>()
);




