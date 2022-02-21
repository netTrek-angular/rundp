import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'rp-embedded-view',
  templateUrl: './embedded-view.component.html',
  styleUrls: ['./embedded-view.component.scss']
})
export class EmbeddedViewComponent implements  OnInit {

  @ViewChild(TemplateRef, {static: true})
  tempRef?: TemplateRef<HTMLHRElement>;

  @ViewChild('strong', {read: TemplateRef, static: true})
  tempRefStrong?: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    if (this.tempRef)
      this.viewContainerRef.createEmbeddedView(this.tempRef)

    if (this.tempRefStrong)
      this.viewContainerRef.createEmbeddedView(this.tempRefStrong, {value: 'saban'} )
  }

}
