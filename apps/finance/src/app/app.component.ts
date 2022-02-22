import {AfterViewInit, Component, ViewContainerRef} from '@angular/core';
import {AvatarComponent} from "@rp/avatar";
import {Sample1Service} from "@rp/reactive";

@Component({
  selector: 'rp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'finance';

  constructor( public viewContainerRef: ViewContainerRef, s1: Sample1Service ) {
    // s1.getMerge().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getLatest().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getConcat().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getForkJoin().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getZip().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getDownDuration().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getSwitchMap().subscribe( {next: console.log, complete: () => console.warn('f') })
    // s1.getMergeMap().subscribe( {next: console.log, complete: () => console.warn('f') })
    s1.getRecursive().subscribe( {next: console.log, complete: () => console.warn('f') })

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

  async ngAfterViewInit() {
    const comp = await import('@rp/avatar').then( m => m.AvatarComponent );
    // console.log( comp );
    const compRef = this.viewContainerRef.createComponent<AvatarComponent>( comp );
    compRef.instance.show = true;
    // console.log( compRef )
  }
}
