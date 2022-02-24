import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromCounter from "./_store/counter.index";

@Component({
  selector: 'rp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'finance';
  myData = ['saban', 'peter', 'heike'];
  selectedIndex = -1;

  constructor( private readonly store: Store ) {
  }

  chged(val: string) {
    console.log ( 'selected', val )
    this.selectedIndex = this.myData.indexOf( val );
  }

  up() {
    this.selectedIndex ++;
  }

  down() {
    this.selectedIndex --;
  }

  chgDP() {
    // this.myData = ['hans', 'frank'];
  }

  increment() {
    this.store.dispatch( fromCounter.increment() )
  }

  decrement() {
    this.store.dispatch( fromCounter.decrement() )
  }

  setVal() {
    this.store.dispatch( fromCounter.setValue( {val: 111} ) )
  }
}
