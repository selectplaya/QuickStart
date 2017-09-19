import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroSearchComponent} from './hero-search.component';
import {HeroService} from './hero.service';
import{RouterModule} from '@angular/router';
import { AppRoutingModule }     from './app-routing.module';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [ 
    AppComponent ,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    DashboardComponent,
  ],
  providers: [
    HeroService
  ],

  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
