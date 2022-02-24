import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ListModule} from "@rp/ui";
import {AppRoutingModule} from "./app-routing.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromCounterStore from "./_store";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ListModule, AppRoutingModule,
    StoreModule.forRoot({}, {}),
    ...(environment.production ? [] : [StoreDevtoolsModule.instrument()]),
    StoreModule.forFeature( fromCounterStore.counterFeatureKey, fromCounterStore.reducer )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
