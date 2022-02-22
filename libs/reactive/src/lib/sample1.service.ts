import { Injectable } from '@angular/core';
import {
  combineLatest,
  concat, distinctUntilChanged, EMPTY, expand, filter,
  forkJoin,
  fromEvent,
  interval,
  map,
  mapTo,
  merge, mergeMap, Observable, of, scan, Subject,
  switchMap,
  take, tap,
  timer,
  zip
} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Sample1Service {

  private intervals = [
    interval ( 500 ),
    interval ( 750 ),
    interval ( 1000 )
  ]

  private _storeSrc = new Subject<{ [key: string]: unknown; }>();
  public readonly store = this._storeSrc.pipe(
    scan((acc, curr) => ({...{},...acc, ...curr}) , {}) );

  updateStore (value: { [key: string]: unknown; } ) {
    this._storeSrc.next( value );
  }

  closeStore () {
    this._storeSrc.complete();
  }

  getRecursive () {
    return of<number> (0 ).pipe(
      // tap ( {next: console.warn } ), // emalig
      expand ( v => { // rekursiv
        ++v;
        console.log ('inside expand', v );
        if ( v === 3 ) return EMPTY;
        return of ( v );
      }),
      // scan ( (acc, value) => acc + value , 1 ),
      take ( 4 )
    )
  }

  getStoreKey ( key: string ) {
    return this._storeSrc.pipe(
      map ( v => v[key]),
      filter ( v => !! v ),
      distinctUntilChanged()
    )
  }

  getSwitchMap () {
    return timer( 100 ).pipe(
      mapTo ( 'outer' ),
      switchMap ( v => // outer must complete
        timer( 200 ).pipe(
          mapTo ('inner')
        )
      )
    )
  }

  getMergeMap () {
    return interval( 100 ).pipe(
      mapTo ( 'outer' ),
      mergeMap ( v => // on every outer emit
        timer( 200 ).pipe(
          mapTo ('inner')
        )
      )
    )
  }

  getDownDuration () {
    const eventTime = (eventName: string) =>
      fromEvent(document, eventName).pipe(map(() => new Date()));

    return zip(
      eventTime('mousedown'),
      eventTime('mouseup')
    ).pipe(map(([start, end]) => Math.abs(start.getTime() - end.getTime())));
  }

  getZip () {
    return zip (
      this.intervals.map ( (value, index) =>
        value.pipe(
          map ( v => `${index}#${v}`),
          take ( 3 )
        )
      )
    )
  }

  getForkJoin () {
    return forkJoin (
      this.intervals.map ( (value, index) =>
        value.pipe(
          map ( v => `${index}#${v}`),
          take ( 2 )
        )
      )
    )
  }

  getConcat () {
    return concat(
      ...this.intervals.reverse().map ( (value, index) =>
        value.pipe(
          map ( v => `${index}#${v}`),
          take ( 2 )
        )
      )
    )
  }

  getLatest () {
    return combineLatest(
      this.intervals.map ( (value, index) =>
        value.pipe(
          map ( v => `${index}#${v}`),
          take ( 2 )
        )
      )
    )
  }

  getMerge() {
    return merge( ...this.intervals.map(
      (value, index) =>
        value.pipe (
          map ( v => `${index}#${v}`)
        )
    ) ).pipe(
      take ( 5 )
    );
    /*
    return merge(
      interval ( 1000 ).pipe ( map ( v => `1#${v}`)),
      interval ( 1500 ).pipe ( map ( v => `2#${v}`)),
      interval ( 2000 ).pipe ( map ( v => `3#${v}`))
    ).pipe( take ( 5 ) )
    */
  }

}
