import {Component, NgModule, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'rp-using-common-mod',
  templateUrl: './using-common-mod.component.html',
  styleUrls: ['./using-common-mod.component.scss']
})
export class UsingCommonModComponent {

  show = true;
}
@NgModule(
  {
    declarations: [UsingCommonModComponent],
    imports: [CommonModule]
  }
)
class MyModule { // unbeddingt ohne Export

}
