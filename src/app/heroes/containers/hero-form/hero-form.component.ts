import { Location } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../model/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  form = this.formBuilder.group({
    id: [''],
    name: [''],
    race: [''],
    strength: [0],
    agility: [0],
    dexterity: [0],
    intelligence: [0],
    enabled: ['']
  });
  
  constructor(
    private formBuilder: NonNullableFormBuilder, 
    private service: HeroesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {

    const hero: Hero = this.route.snapshot.data['hero']; 
    this.form.patchValue(
      {
        id: hero.id, 
        name: hero.name, 
        race: hero.race, 
        strength: hero.power_stats.strength, 
        agility: hero.power_stats.agility, 
        dexterity: hero.power_stats.dexterity, 
        intelligence: hero.power_stats.intelligence,
        enabled: hero.enabled
      });
    
    console.log(hero);
    
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Hero created!', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Error on saving hero.', '', {duration: 5000});
  }
}
