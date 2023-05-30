import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit{

  //Convensão para identicar objetos do tipo Observable o uso do $ no final do nome da variável
  heroes$!: Observable<Hero[]>;
  @Input() label = '';

  private searchTerm = new Subject<string>();

  @Output() private selected = new EventEmitter<Hero>();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      //debounceTime(300) -- aguarda 600ms para realizar a busca
      debounceTime(600),
      //Só faz nova b usca se o termo for diferente do anterior usado
      distinctUntilChanged(),
      switchMap((term) => this.heroService.search(term))
    );
  }

  onSelected(selectedItem: MatAutocompleteSelectedEvent): void {
    const hero: Hero = selectedItem.option.value;
    this.searchTerm.next('');
    this.selected.emit(hero);
  }

  search(term: string): void {
    this.searchTerm.next(term);
  }
}
