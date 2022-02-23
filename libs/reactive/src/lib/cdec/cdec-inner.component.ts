import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'rp-cdec-inner',
  template: `
    <p>
      cdec-inner works! {{val}}
    </p>`,
  styles: [`:host {display: block;}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdecInnerComponent implements OnInit {
  val = 100;

  constructor( private readonly changeDetectorRef: ChangeDetectorRef ) {
    // this.changeDetectorRef.reattach();
  }

  ngOnInit(): void {
    setInterval( () => {
      this.val++;
      // if ( this.val === 102 ) this.changeDetectorRef.markForCheck(); // kind und auf
      if ( this.val === 102 ) this.changeDetectorRef.detectChanges(); // slebst
    }, 500 );
  }

}
