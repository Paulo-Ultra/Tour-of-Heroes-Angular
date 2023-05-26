import { Component, OnInit } from "@angular/core";
import { HeroService } from "../../../core/services/hero.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Hero } from "../../../core/models/hero.model";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero!: Hero;
  isEditing!: boolean;

  constructor(private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.getHero();
    }

    getHero(): void {
      const paramId = this.route.snapshot.paramMap.get('id');

      if(paramId === 'new') {
        this.isEditing = false;
        this.hero = {name: ''} as Hero;
      } else{
        this.isEditing = true;

        const id = Number(paramId);
        this.heroService.getOne(id).subscribe((hero) => (this.hero = hero));
      }
    }

    goBack(): void {
      this.location.back();
    }

    create(): void {
      this.heroService.create(this.hero).subscribe(() => this.goBack());
    }

    update(): void {
      this.heroService.update(this.hero).subscribe(() => this.goBack());
    }

    isFormValid(): boolean {
      return !! this.hero.name.trim();

      //Se vier vazio = ''
      // Negando o vazio 1x = ! = true
      // Negando o vazio 2x = !! = false
    }
}
