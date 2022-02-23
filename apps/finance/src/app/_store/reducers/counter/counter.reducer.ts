import { Action, createReducer, on } from '@ngrx/store';
import {decrementCounters, incrementCounters, setCountersVal} from "../../actions/counter/counter.actions";


export const counterFeatureKey = 'counter';

export interface CounterState {
  val: number
}

export const initialState: CounterState = {
  val: 0
};

export const counterReducer = createReducer(
  initialState,
  on(incrementCounters, state => ({...state, val: state.val + 1}) ),
  on(decrementCounters, state => ({...state, val: state.val - 1}) ),
  on(setCountersVal, (state, { val }) => ({...state, val }) ),
);
