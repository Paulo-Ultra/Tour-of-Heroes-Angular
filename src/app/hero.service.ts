import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero.model';
import { Observable, of, throwError } from 'rxjs';

//Quando inicia a aplicação o service vai ser criado no momento inicial da aplicação
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    //A lista por conta do of da biblioteca rxjs se torna um observable
    const heroes = of(HEROES);

    //return throwError(new Error('Erro ao buscar heróis'));
    return heroes;
  }
}
