import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroService} from './hero.service';
import{Router} from '@angular/router';
@Component({

  selector: 'my-heroes',
  templateUrl: './Heroes.component.html',
  styleUrls: [ './heroes.component.css' ]

})
export class HeroesComponent implements OnInit { 
  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(
    private router: Router,
    private heroService: HeroService) { }

  hero : Hero ={ 
    id: 1,
    name: 'Windstorm'
  };
  heroes : Hero[];
  selectedHero: Hero;


  

  //methods
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
   this.heroService.getHeroes()
                      .then(x => this.heroes = x);
  }

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
//end of methods
 }




