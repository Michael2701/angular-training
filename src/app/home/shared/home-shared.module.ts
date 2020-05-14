import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
// import { DialogComponent } from './dialog/dialog.component';
// import { MenuComponent } from './menu/menu.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
// import { SubscribeDialogComponent } from './subscribe-dialog/subscribe-dialog.component';


const components = [
  // DialogComponent,
  // MenuComponent,
  MovieCardComponent,
  // SubscribeDialogComponent
]
const modules = [
  
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    ...modules
  ],
  exports: [
    ...modules,
    ...components
  ]
})
export class HomeSharedModule { }
