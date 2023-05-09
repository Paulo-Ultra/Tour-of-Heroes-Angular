import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{

  heroes: Hero[] = [];
  //Interrogação indica que a variável pode ser undefined
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}

   ngOnInit(): void {
    this.getHeroes();
   }

   getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
   }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
