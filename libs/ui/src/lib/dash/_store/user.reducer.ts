import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import {User} from "./user";

export const userFeatureKey = 'user';

export interface UserState {
  admin?: User
}

export const initialState: UserState = {
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state, {user}) => ({...state, admin: user})),
  on(UserActions.loadUsersFailure, (state, {error}) => ({...state, admin: undefined})),

);
