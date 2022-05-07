import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component'
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SuscriptoresComponent } from './suscriptores/suscriptores.component';
import { UnheroeComponent } from './unheroe/unheroe.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'subscribers', component: SuscriptoresComponent},

  {path: 'heroe/:id', component: UnheroeComponent},
  {path: 'buscador/:nombreH', component: SearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
