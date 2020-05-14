import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { MainResolver } from './main/store/main.resolver';
import { AutocompleteResolver } from './search/store/autocomplete.resolver';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent, resolve: {haveMovies: MainResolver}, children: [
        { path: '', pathMatch: 'full', component: MainComponent },
        { path: 'search', resolve:{autocomplete: AutocompleteResolver }, component: SearchComponent },
        { path: 'contact', component: ContactComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }