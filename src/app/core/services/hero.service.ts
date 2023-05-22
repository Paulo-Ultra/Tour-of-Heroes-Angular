import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//Quando inicia a aplicação o service vai ser criado no momento inicial da aplicação
@Injectable({
  providedIn: 'root'
})
export class HeroService {

    //O frontend usa o /api para não confundir com o backend e causar algum problema na aplicação
    //Backend
    //http://heroes.herokuapp.com/heroes

    //Frontend
    //http://heroes.vercel.app/api/heroes
  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
    ) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes)=> this.log(`fetched ${heroes.length} heroes`))
    );

      //Como estava usando o mock
    //A lista por conta do of da biblioteca rxjs se torna um observable
   // const heroes = of(HEROES);
  // this.log('fetched heroes');

  //  return heroes;
  }

  getHero(id: number): Observable<Hero> {

    return this.httpClient.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap((heroes)=> this.log(`fetched hero id=${id} and name=${heroes.name}`))
    );

          //Como estava usando o mock
    //A exclamação é para dizer que o find vai retornar um valor
    //const hero = HEROES.find(hero => hero.id === id)!;
    //this.log(`fetched hero id=${id}`);
    //return of(hero);
  }

  private log(message: string): void {
    this.messageService.addMessage(`HeroService: ${message}`)
  }
}
