import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';
import {ListComponent} from "../list.component";

@Component({
  selector: 'rp-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent  {

  get selected(): boolean {
    return this._selected;
  }
  @Input()
  @HostBinding('class.active')
  set selected(value: boolean) {
    // if ( value !== this._selected && value === true ){
    //   console.log( 'selected state changed', this.value )
    //   setTimeout( () => {
    //     this.selectedVal.emit( this.value );
    //   }, 0)
    // }
    this._selected = value;
  }

  private _selected = false;

  @Input()
  value = ''

  @Output()
  selectedVal: EventEmitter<string> = new EventEmitter<string>();

  constructor( private parent: ListComponent ) {
    console.log( parent )
  }

  @HostListener('click')
  clicked() {
    this.selectedVal.emit( this.value );
  }
}
