import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as UserActions from './user.actions';
import {User} from "./user";



@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        of<User>( {f: 'saban', l: 'uenlue'} ).pipe(
          map(user => UserActions.loadUsersSuccess({ user })),
          catchError(error => of(UserActions.loadUsersFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
