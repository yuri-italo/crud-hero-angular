import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { HeroFormComponent } from './containers/hero-form/hero-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroFormComponent,
    HeroesListComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
