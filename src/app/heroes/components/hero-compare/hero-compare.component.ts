import { Component } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { comparedheroes, HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-hero-compare',
  templateUrl: './hero-compare.component.html',
  styleUrls: ['./hero-compare.component.css']
})
export class HeroCompareComponent {
  heroName1: string = "";
  heroName2: string = "";

  form = this.formBuilder.group({
    heroName1: [""],
    heroName2: [""]
  });

  data: comparedheroes[] = [];
  readonly displayedColumns = ['id', 'name', 'strength', 'agility', 'dexterity', 'intelligence'];
  
  constructor(
    private formBuilder: NonNullableFormBuilder,
    private location: Location,
    private snackBar: MatSnackBar,
    private service: HeroesService
  ) {
    
    this.form.setValue({
      heroName1: this.heroName1,
      heroName2: this.heroName2
    });

  }
  
  onCancel() {
    this.location.back();
  }
  
  onCompare() {
    this.service.compare(this.form.value).subscribe(element => {
      this.data = element;
    }, error => this.onError());
  }

  onError(): void {
    this.snackBar.open('Type a existing hero name.', '', {duration: 5000});
  }
}
