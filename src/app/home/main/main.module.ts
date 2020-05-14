import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './main.component';
import { MaterialModule } from '../../material/material.module';
import { HomeSharedModule } from '../shared/home-shared.module';


const components = [
  MainComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    HomeSharedModule
  ],
  exports: components
})
export class MainModule { }
