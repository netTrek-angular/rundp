import {NgModule} from '@angular/core';
import {HelloWorldComponent} from './hello-world.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [CommonModule],
})
export class HelloWorldModule {}
