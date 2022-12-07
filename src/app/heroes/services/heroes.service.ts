import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private readonly API = 'http://localhost:8080/api/v1/heroes/';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Hero[]>(this.API)
      .pipe(
        first(),
        //delay(6000),
        tap(heroes => console.log(heroes))
      );
  }

  save(record: Partial<Hero>) {
    return this.httpClient.post<Hero>(this.API,record).pipe(first());
  }
}
