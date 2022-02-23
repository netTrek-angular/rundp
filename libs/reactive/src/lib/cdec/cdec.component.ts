import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'rp-cdec',
  templateUrl: './cdec.component.html',
  styleUrls: ['./cdec.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdecComponent implements OnInit {
  val = 1;

  constructor( private readonly changeDetectorRef: ChangeDetectorRef ) {
    // this.changeDetectorRef.reattach();
  }

  ngOnInit(): void {
    setInterval( () => {
      this.val++;
      this.autoUpdate ( this.val );
    }, 500 );
  }

  @HostListener('click')
  clicked () {
    console.log ('val:= ', this.val );
  }

  private autoUpdate(val: number) {
    // if ( val % 5 === 0 ) this.changeDetectorRef.detectChanges();
    // if ( val === 4 ) this.changeDetectorRef.reattach();
    // if ( val === 8 ) this.changeDetectorRef.detach();
  }
}
