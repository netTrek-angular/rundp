import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {ListModule} from "@rp/ui";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HelloWorldComponent],
  imports: [BrowserModule, ListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
