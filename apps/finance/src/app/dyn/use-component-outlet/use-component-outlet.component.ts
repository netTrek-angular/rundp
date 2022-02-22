import {Component, Injector, OnInit, StaticProvider, Type} from '@angular/core';
import {AvatarComponent} from "@rp/avatar";

@Component({
  selector: 'rp-use-component-outlet',
  templateUrl: './use-component-outlet.component.html',
  styleUrls: ['./use-component-outlet.component.scss']
})
export class UseComponentOutletComponent implements OnInit {
  AvatarComponent: Type<AvatarComponent> = AvatarComponent;

  myContent = [
    [document.createTextNode('Ahoj')],
  ];
  myInjector: Injector = Injector.create({providers: []});

  constructor( private injector: Injector ) {
  }

  ngOnInit(): void {
    this.myInjector = Injector.create(
      {
        providers: [ { provide: 'show', useValue: true }],
        parent: this.injector
      }
    )
  }

}
