import {AfterViewInit, Component, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'rp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'finance';

  constructor( public viewContainerRef: ViewContainerRef) {
  }

  async ngAfterViewInit() {
    const comp = await import('@rp/avatar').then( m => m.AvatarComponent );
    console.log( comp );
    this.viewContainerRef.createComponent( comp );
  }
}
