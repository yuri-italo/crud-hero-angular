import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroesService } from '../services/heroes.service';

@Injectable({
  providedIn: 'root'
})
export class HeroResolver implements Resolve<Hero> {

  constructor(private service: HeroesService) {

  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero> {
    if(route.params && route.params['id']) {
      console.log('test');
      
      return this.service.loadById(route.params['id']);
    }

    return of({id: '', name: '', race: '', power_stats:{strength: 0, agility: 0, dexterity: 0, intelligence: 0}});
  }
}
