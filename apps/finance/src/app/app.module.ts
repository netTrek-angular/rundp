import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {ListModule} from "@rp/ui";
import {AppRoutingModule} from "./app-routing.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromCounterStore from "./_store/counter.index";
import { reducers, metaReducers } from './_store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import {defaultDataServiceConfig, entityConfig} from './_store/entity-metadata';
import { PostModule } from './post/post.module';
import {HttpClientModule} from "@angular/common/http";
import { PostEffects } from './post/post.effects';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ListModule, AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature( fromCounterStore.counterFeatureKey, fromCounterStore.reducer ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    PostModule,
    HttpClientModule,
    EffectsModule.forFeature([PostEffects])
  ],
  providers: [{ provide: DefaultDataServiceConfig,
    useValue: defaultDataServiceConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
