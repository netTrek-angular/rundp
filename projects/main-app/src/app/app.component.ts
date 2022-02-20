import { AfterViewInit, Component, OnInit, ViewContainerRef } from '@angular/core';
import { HelperLibComponent } from 'helper-lib';

@Component({
  selector: 'rundp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'mainApp';

  constructor ( public viewContainerRef: ViewContainerRef ) {
  }

  async ngAfterViewInit () {
    const helperLibComponent = await import('projects/helper-lib/src/lib/helper-lib.component').then( m => m.HelperLibComponent )
    this.viewContainerRef.createComponent<HelperLibComponent>( helperLibComponent )
  }
}
