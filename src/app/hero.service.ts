import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero.model';
import { Observable, of } from 'rxjs';

//Quando inicia a aplicação o service vai ser criado no momento inicial da aplicação
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    //A lista por conta do of da biblioteca rxjs se torna um observable
    const heroes = of(HEROES);
    this.messageService.addMessage('HeroService: fetched heroes');

    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    //A exclamação é para dizer que o find vai retornar um valor
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
