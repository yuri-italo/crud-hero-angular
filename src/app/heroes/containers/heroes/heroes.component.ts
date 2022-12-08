import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Hero } from '../../model/hero';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes$: Observable<Hero[]>;
  
  // heroesService: HeroesService;

  constructor(
    private heroesService: HeroesService, 
    public dialog: MatDialog, 
    private router: Router, 
    private route: ActivatedRoute, 
    private snackBar: MatSnackBar) {
    // this.heroes = [];
    // this.heroesService = new HeroesService();
    this.heroes$ = this.heroesService.list().pipe(
      catchError(error => {
        this.onError('Error on load heroes.');
        return of([]);
      })
    );
  }

  refresh() {
    this.heroes$ = this.heroesService.list().pipe(
      catchError(error => {
        this.onError('Error on load heroes.');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(hero: Hero) {
    console.log(hero);
    
    this.router.navigate(['edit', hero.id], {relativeTo: this.route});
  }

  onRemove(hero: Hero) {  
    this.heroesService.remove(hero.id).subscribe(() => {this.refresh();
      this.snackBar.open('Hero removed!', 'X', {duration: 5000, verticalPosition: 'top', horizontalPosition: 'center'});
    }, () => this.onError('Error on deleting hero!'));
  }
}
