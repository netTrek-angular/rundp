import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import {EntityOp, ofEntityOp, ofEntityType} from "@ngrx/data";
import {tap} from "rxjs";



@Injectable()
export class PostEffects {

  constructor(private actions$: Actions) {}
/*

  ngrxDataEffectForQueryLoad$ = createEffect(
    () =>this.actions$.pipe(
      ofEntityType(['Post']),
      ofEntityOp([EntityOp.QUERY_ALL_SUCCESS]),
      tap(action =>
        console.log("effect!"))),
    { dispatch: false }
  );
*/

}
