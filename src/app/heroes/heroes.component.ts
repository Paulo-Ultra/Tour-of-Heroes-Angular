import { HeroService } from '../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/models/hero.model';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name'];
  heroes: Hero[] = [];
  //Interrogação indica que a variável pode ser undefined
  //selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

   ngOnInit(): void {
    this.getHeroes();
   }

   getHeroes(): void {
    this.heroService.getHeroes().subscribe(
      (heroes) => (this.heroes = heroes));
   }


  /*getHeroes(): void {
    //Para o Observable executar é necessário o subcribe()
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
     //O subscribe() é um método que recebe até três callbacks, que tratam notificações enviadas pelo observable, parecido com try/catch no java
     this.heroService.getHeroes().subscribe({
      //Somente esse método é obrigatório
      next(x) {
        console.log('got value ' + JSON.stringify(x, null, 2));
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });

    //Com arrow function
    this.heroService.getHeroes().subscribe(
      (value) => console.log(value),
    (error) => console.log(error),
    ()=> console.log('Agora foi concluído!'));

    //Exemplo da Documentação do rxjs.dev
    const observable = new Observable((subscriber) => {
      //Observable pode retornar valores sincronos, assincronos ou ambos e usando o next podemos pegar o valor emitido pelo observable,
      //antes de passar para o subscribe
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('just before subscribe');
    observable.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });*/
}
