import {AfterViewInit, Component, ViewContainerRef} from '@angular/core';
import {AvatarComponent} from "@rp/avatar";
import {Sample1Service} from "@rp/reactive";
import {Store} from "@ngrx/store";
import {selectNavigationId, selectRouterState, selectUrl} from "./_store/router/router.selectors";
import {filter} from "rxjs";
import * as fromCounter from "./_store/counter/index";

@Component({
  selector: 'rp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  title = 'finance';
  readonly counter$ = this.store.select( fromCounter.selectCounterState );
  private loadAvatar = false;

  constructor(
    public readonly viewContainerRef: ViewContainerRef,
    readonly s1: Sample1Service,
    private readonly store: Store ) {
    this.loadAvatar = true;
    // this.rxjsSamples(s1);

  }

  async ngAfterViewInit() {
    this.runStoreSamples();
    await this.loadAvatarComp();
  }

  private async loadAvatarComp() {

    if ( !this.loadAvatar ) return;

    const avatarComponent = await import('@rp/avatar').then(m => m.AvatarComponent);
    const compRef = this.viewContainerRef.createComponent<AvatarComponent>(avatarComponent);
    compRef.instance.show = true;

    const useComMod = await import('@rp/using-com').then(m => m.UsingCommonModComponent);
    this.viewContainerRef.createComponent (useComMod);

    const useNotComMod = await import('@rp/not-using-com').then(m => m.NotUsingCommonModComponent);
    this.viewContainerRef.createComponent (useNotComMod);
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

  decrement() {
    this.store.dispatch( fromCounter.decrement() );
  }

  increment() {
    this.store.dispatch( fromCounter.increment() );
  }

  setVal() {
    this.store.dispatch( fromCounter.setCounterState({val: 111}) );
  }
}
