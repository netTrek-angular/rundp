import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ListModule} from "@rp/ui";
import {AppRoutingModule} from "./app-routing.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ListModule, AppRoutingModule, StoreModule.forRoot({}, {}), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }) ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
