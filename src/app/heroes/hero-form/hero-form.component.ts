import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, 
    private service: HeroesService,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      name: [null],
      race: [null],
      strength: [null],
      agility: [null],
      dexterity: [null],
      intelligence: [null]
    });
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
