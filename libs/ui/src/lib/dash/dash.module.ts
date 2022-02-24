import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './_store/user.effects';
import {StoreModule} from "@ngrx/store";
import {userFeatureKey, userReducer} from "./_store/user.reducer";


@NgModule({
  declarations: [
    DashComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule,
    StoreModule.forFeature( userFeatureKey, userReducer ),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class DashModule { }
