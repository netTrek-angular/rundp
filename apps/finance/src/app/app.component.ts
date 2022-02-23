import {AfterViewInit, Component, ViewContainerRef} from '@angular/core';
import {AvatarComponent} from "@rp/avatar";
import {Sample1Service} from "@rp/reactive";
import {Store} from "@ngrx/store";
import {selectNavigationId, selectRouterState, selectUrl} from "./_store/router/router.selectors";
import {filter} from "rxjs";
import {ROUTER_REQUEST} from "@ngrx/router-store";

@Component({
  selector: 'rp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  title = 'finance';
  private loadAvatar = false;

  constructor(
    public readonly viewContainerRef: ViewContainerRef,
    readonly s1: Sample1Service,
    private readonly store: Store ) {
    // this.loadAvatar = true;
    // this.rxjsSamples(s1);

  }

  async ngAfterViewInit() {
    this.runStoreSamples();
    await this.loadAvatarComp();
  }

  private async loadAvatarComp() {

    if ( !this.loadAvatar ) return;

    const comp = await import('@rp/avatar').then(m => m.AvatarComponent);
    // console.log( comp );
    const compRef = this.viewContainerRef.createComponent<AvatarComponent>(comp);
    compRef.instance.show = true;
    // console.log( compRef )
  }

  private rxjsSamples(s1: Sample1Service) {
    // s1.getMerge().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getLatest().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getConcat().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getForkJoin().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getZip().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getDownDuration().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getSwitchMap().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getMergeMap().subscribe( {next: console.log, complete: () => console.warn('f') })
    s1.getRecursive().subscribe({next: console.log, complete: () => console.warn('f')})

    /*
    s1.store.subscribe( {next: console.log, complete: () => console.warn('f') });
    s1.getStoreKey('age').subscribe( {next: console.log, complete: () => console.warn('f') });
    s1.updateStore( {person: 'saban'} );
    s1.updateStore( {person: 'frank'} );
    s1.updateStore( {age: 123} );
    s1.updateStore( {age: 123} );
    s1.updateStore( {age: 124} );
    */
  }

  private runStoreSamples() {

    this.store.select( selectUrl ).pipe( filter ( v => !!v )).subscribe(
      {
        next: console.warn
      }
    )

    /*

        this.store.select( selectRouterState ).subscribe(
          {
            next: console.warn
          }
        )
    */
  }
}
