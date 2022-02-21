import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'rp-embedded-view',
  templateUrl: './embedded-view.component.html',
  styleUrls: ['./embedded-view.component.scss']
})
export class EmbeddedViewComponent implements AfterViewInit {

  @ViewChild(TemplateRef)
  tempRef?: TemplateRef<HTMLHRElement>;

  @ViewChild('saban', {read: TemplateRef})
  tempRefSaban?: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngAfterViewInit(): void {
    if (this.tempRef)
      this.viewContainerRef.createEmbeddedView(this.tempRef)
  }

}
