import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'rp-cdec',
  templateUrl: './cdec.component.html',
  styleUrls: ['./cdec.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdecComponent implements OnInit {
  val = 1;


  ngOnInit(): void {
    setInterval( () => this.val++, 500 );
  }

  @HostListener('click')
  clicked () {
    console.log ('val:= ', this.val );
  }

}
