import {Component, HostListener, Input, NgModule, OnInit} from '@angular/core';
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
}

@NgModule(
  {
    declarations: [AvatarComponent],
    imports: [CommonModule]
  }
)
class MyModule { // unbeddingt ohne Export

}
