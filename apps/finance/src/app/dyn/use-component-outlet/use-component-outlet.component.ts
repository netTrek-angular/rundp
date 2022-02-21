import {Component, Injector, Type} from '@angular/core';
import {AvatarComponent} from "@rp/avatar";

@Component({
  selector: 'rp-use-component-outlet',
  templateUrl: './use-component-outlet.component.html',
  styleUrls: ['./use-component-outlet.component.scss']
})
export class UseComponentOutletComponent {
  AvatarComponent: Type<AvatarComponent> = AvatarComponent;

  myContent = [
    [document.createTextNode('Ahoj')],
  ];
  constructor( public myInjector: Injector ) {
  }

}
