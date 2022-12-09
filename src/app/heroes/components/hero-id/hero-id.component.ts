import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../model/hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-id',
  templateUrl: './hero-id.component.html',
  styleUrls: ['./hero-id.component.css']
})
export class HeroIdComponent {
  form = this.formBuilder.group({
    id: [''],
    name: [''],
    race: [''],
    enabled: [''],
    strength: [0],
    agility: [0],
    dexterity: [0],
    intelligence: [0],
    created_at: [new Date()],
    updated_at: [new Date()]
  });
  
  constructor(
    private formBuilder: NonNullableFormBuilder, 
    private location: Location,
    private route: ActivatedRoute
  ) {

    const hero: Hero = this.route.snapshot.data['hero']; 
    console.log(hero);
    
    this.form.patchValue(
      {
        id: hero.id, 
        name: hero.name, 
        race: hero.race,
        created_at: new Date(hero.created_at),
        updated_at: new Date(hero.updated_at),
        enabled: hero.enabled,
        strength: hero.power_stats.strength, 
        agility: hero.power_stats.agility, 
        dexterity: hero.power_stats.dexterity, 
        intelligence: hero.power_stats.intelligence
      });
    
  }

  onCancel() {
    this.location.back();
  }
}
