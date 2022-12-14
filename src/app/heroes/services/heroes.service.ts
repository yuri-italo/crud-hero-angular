import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

export interface comparedheroes {
  id: string,
  name: string,
  strength: number,
  agility: number,
  dexterity: number,
  intelligence: number
} 

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private readonly API = 'http://localhost:8080/api/v1/heroes';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Hero[]>(this.API)
      .pipe(
        first(),
        //delay(6000),
        tap(heroes => console.log(heroes))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Hero>(`${this.API}/${id}`);
  }

  save(record: Partial<Hero>) {
    console.log(record);
    
    if(record.id) {
      console.log('update');
      
      return this.update(record);
    }
    console.log('create');
    return this.create(record);
  }

  private create(record: Partial<Hero>) {
    return this.httpClient.post<Hero>(this.API,record).pipe(first());
  }

  private update(record: Partial<Hero>) {
    return this.httpClient.patch<Hero>(`${this.API}/${record.id}`,record).pipe(first());
  }

  public remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }


  compare(value: Partial<{heroName1: string;heroName2: string;}>) {
    return this.httpClient.get<comparedheroes[]>(`${this.API}/compare?hero1Name=${value.heroName1}&hero2Name=${value.heroName2}`).pipe(first());
  }
}
