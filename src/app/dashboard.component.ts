import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ],
   
})
// template: '<h3>My dashboard</h3>',
export class DashboardComponent implements OnInit {
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(x => this.heroes = x.slice(1,5));
    }
    heroes: Hero[] = [];
    
      constructor(private heroService: HeroService) { }
}