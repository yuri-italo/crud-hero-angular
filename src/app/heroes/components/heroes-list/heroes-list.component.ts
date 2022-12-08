import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../model/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})


export class HeroesListComponent {
  @Input() heroes: Hero[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['id', 'name', 'race', 'actions'];

  constructor() { 
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(hero: Hero) {
    this.edit.emit(hero);
  }

  onDelete(hero: Hero) {
    this.remove.emit(hero);
  }
}


