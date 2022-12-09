import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroCompareComponent } from './components/hero-compare/hero-compare.component';
import { HeroIdComponent } from './components/hero-id/hero-id.component';
import { HeroFormComponent } from './containers/hero-form/hero-form.component';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { HeroResolver } from './guards/hero.resolver';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'new', component: HeroFormComponent, resolve: {hero: HeroResolver} },
  { path: 'edit/:id', component: HeroFormComponent, resolve: {hero: HeroResolver} },
  { path: 'open/:id', component: HeroIdComponent, resolve: {hero: HeroResolver} },
  { path: 'compare', component: HeroCompareComponent, resolve: {hero: HeroResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
