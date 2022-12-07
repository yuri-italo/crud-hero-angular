import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  form = this.formBuilder.group({
    name: [''],
    race: [''],
    strength: [null],
    agility: [null],
    dexterity: [null],
    intelligence: [null]
  });
  
  constructor(private formBuilder: NonNullableFormBuilder, 
    private service: HeroesService,
    private snackBar: MatSnackBar,
    private location: Location) {
    //this.form 
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSucces(), error => this.onError());
  }

  onCancel() {
    this.location.back();
  }

  private onSucces() {
    this.snackBar.open('Hero created!', '', {duration: 5000});
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Error on saving hero.', '', {duration: 5000});
  }
}
