import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private heroesService: HeroesService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    // this.heroes = [];
    // this.heroesService = new HeroesService();
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
}
