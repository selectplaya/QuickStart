import { Component, OnInit } from '@angular/core';
//import { Hero } from './Hero';
//import { HeroDetailComponent } from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';



    @Component({
       selector: 'my-app',

       template: `
       <h1>{{title}}</h1>
       <nav>
       <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
       <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
       </nav>
       <router-outlet></router-outlet>
       
    
       `,
       styleUrls: ['./app.component.css'],
    })

    export class AppComponent{
        name = 'Angular';
        title = 'Tour of heroes';
}