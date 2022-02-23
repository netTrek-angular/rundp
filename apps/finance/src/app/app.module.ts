import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {UiModule} from "@rp/ui";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HelloWorldComponent],
  imports: [BrowserModule, UiModule, AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
