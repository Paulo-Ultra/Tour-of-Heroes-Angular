import { Component } from '@angular/core';
import { Hero } from '../hero.model';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes = HEROES;
  //Interrogação indica que a variável pode ser undefined
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
