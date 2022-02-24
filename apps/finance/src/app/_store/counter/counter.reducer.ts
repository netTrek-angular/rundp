import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const counterFeatureKey = 'counter';

// export interface State {
//   no: number
// }
//
// export const initialState: State = {
//   no: 0
// };

export const reducer = createReducer(
  0,
  on(CounterActions.increment, state => state + 1 ),
  on(CounterActions.decrement, state => state - 1 ),
  on(CounterActions.setCounterState, (state, {val}) => val ),
);
