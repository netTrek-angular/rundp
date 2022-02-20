import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @Input()
  val = '123';

  @Output()
  valChg: EventEmitter<string> = new EventEmitter<string>()

  send ( val: string ) {
    this.valChg.emit( val );
  }
}
