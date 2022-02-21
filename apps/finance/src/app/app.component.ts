import {AfterViewInit, Component, ViewContainerRef} from '@angular/core';
import {AvatarComponent} from "@rp/avatar";

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
    // console.log( comp );
    const compRef = this.viewContainerRef.createComponent<AvatarComponent>( comp );
    compRef.instance.show = true;
    // console.log( compRef )
  }
}
