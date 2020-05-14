import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
  FormsModule,
  ReactiveFormsModule,  
]


@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class SharedModule { }
