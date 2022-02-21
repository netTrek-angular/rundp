import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'rp-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent  {
  @Input()
  val = 'hello world';

  @Input()
  val2 = 'hello world';
}
