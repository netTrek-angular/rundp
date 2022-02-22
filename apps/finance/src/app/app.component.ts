import { Component } from '@angular/core';

@Component({
  selector: 'rp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'finance';
  myData = ['saban', 'peter', 'heike'];
  selectedIndex = -1;

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
}
