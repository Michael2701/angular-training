import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { MainModule } from './main/main.module';
import { ContactModule } from './contact/contact.module';
import { SearchModule } from './search/search.module';
import { HomeRoutingModule } from './home-routing.module';
import * as fromHome from './store/home.reducer';
import { HomeComponent } from './home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MainEffects } from './main/store/main.effects';
import { SearchEffects } from './search/store/search.effects';

const components = [
  HomeComponent
]
const modules = [
  MainModule,
  ContactModule,
  SearchModule,
  HomeRoutingModule
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('home',fromHome.homeReducer),
    EffectsModule.forFeature([MainEffects, SearchEffects]),
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class HomeModule { }
