import {Component, HostListener, Inject, Input, NgModule, OnInit, Optional} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'rp-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

  @Input()
  show?: boolean;

  @HostListener('click')
  clicked() {
    this.show = !this.show
  }

  constructor( @Optional() @Inject('show') injectedShowVal?: boolean ) {
    this.show = injectedShowVal
  }
}

@NgModule(
  {
    declarations: [AvatarComponent],
    imports: [CommonModule]
  }
)
class MyModule { // unbeddingt ohne Export

}
