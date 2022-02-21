import {Component, ContentChild, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {EmbedableDirective} from "./embedable.directive";

@Component({
  selector: 'rp-embed-via-content',
  templateUrl: './embed-via-content.component.html',
  styleUrls: ['./embed-via-content.component.scss']
})
export class EmbedViaContentComponent implements OnInit {

  @Input()
  dataProvider: number[] = [1, 2, 3];

  @ContentChild(EmbedableDirective, {read: TemplateRef, static: true})
  tempRef?: TemplateRef<any>;


  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
    this.renderDataProvider();
  }

  private renderDataProvider() {
    this.viewContainerRef.clear();
    this.dataProvider.forEach(value => {
        if (this.tempRef)
          this.viewContainerRef.createEmbeddedView(this.tempRef, {value})
      }
    )
  }
}
