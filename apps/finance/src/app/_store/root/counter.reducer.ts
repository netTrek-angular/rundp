import { Action, createReducer, on } from '@ngrx/store';


export const featureKey = 'counter';

export interface State {
  counter: number;
}

export const initialState: State = {
  counter: 0
};

export const reducer = createReducer(
  initialState,

);
