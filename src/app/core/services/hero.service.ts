import { LoadingService } from './loading.service';
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
    private httpClient: HttpClient,
    private loadingService: LoadingService
    ) {}

  getAll(): Observable<Hero[]> {
    return this.httpClient
    .get<Hero[]>(this.heroesUrl)
    .pipe(tap((heroes)=> this.log(`fetched ${heroes.length} hero(es)`)));

    /*//Sem usar o interceptor
    this.loadingService.show();
    return this.httpClient
    .get<Hero[]>(this.heroesUrl).pipe(
      tap((heroes)=> this.log(`fetched ${heroes.length} hero(es)`)),
      finalize(() => this.loadingService.hide())); */

      //Como estava usando o mock
    //A lista por conta do of da biblioteca rxjs se torna um observable
   // const heroes = of(HEROES);
  // this.log('fetched heroes');

  //  return heroes;
  }

  getOne(id: number): Observable<Hero> {

    return this.httpClient
    .get<Hero>(this.getUrl(id))
    .pipe(tap((hero)=> this.log(`fetched ${this.descAttributes(hero)}`)));

          //Como estava usando o mock
    //A exclamação é para dizer que o find vai retornar um valor
    //const hero = HEROES.find(hero => hero.id === id)!;
    //this.log(`fetched hero id=${id}`);
    //return of(hero);
  }

  create(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.heroesUrl, hero)
    .pipe(tap((hero) => this.log(`Created ${this.descAttributes(hero)}`))
    );
  }

  update(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(this.getUrl(hero.id), hero)
    .pipe(tap((hero) => this.log(`Updated ${this.descAttributes(hero)}`))
    );
  }

  //O Observable fica como any pq no retorno n~]ao virá nada
  delete(hero: Hero): Observable<any> {
    return this.httpClient
    .delete<any>(this.getUrl(hero.id))
    .pipe(tap(() => this.log(`Deleted ${this.descAttributes(hero)}`)));
  }

  private descAttributes(hero: Hero): string {
    return `Hero ID=${hero.id} and Name=${hero.name}`;
  }

  private log(message: string): void {
    this.messageService.addMessage(`HeroService: ${message}`)
  }

  private getUrl(id: number): string {
    return `${this.heroesUrl}/${id}`;
  }
}
