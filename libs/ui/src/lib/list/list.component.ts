import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'rp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnChanges {

  get selectedIndex(): number {
    return this._selectedIndex;
  }

  @Input()
  set selectedIndex(value: number) {
    this._selectedIndex = value;
    console.log( 'selectedIdx', this.selectedIndex );
  }

  private _selectedIndex = -1;

  @Input()
  dataProvider: string[] = [];

  @Output()
  selectionChanged: EventEmitter<string> = new EventEmitter<string>();

  selectedVal?: string;

  // ngOnInit(): void {
  //   console.log ( this.dataProvider )
  //   this.selectedVal = this.dataProvider[this.selectedIndex];
  // }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes['selectedIndex'] ){
      const simpleChag = changes['selectedIndex'];
      if ( !simpleChag.firstChange ) {
        this.selectedVal = this.dataProvider[this.selectedIndex];
      }
    }
    if ( changes['dataProvider'] ){
      const simpleChag = changes['dataProvider'];
      if ( !simpleChag.firstChange ) {
        this.selectedIndex = -1;
      }
    }
  }

  selectedValue( value: string) {
    this.selectedVal = value === this.selectedVal ? undefined : value;
    this.selectionChanged.emit( this.selectedVal );
  }
}
