import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroFormComponent } from './containers/hero-form/hero-form.component';
import { HeroesComponent } from './containers/heroes/heroes.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'new', component: HeroFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
