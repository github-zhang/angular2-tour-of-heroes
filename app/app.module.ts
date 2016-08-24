import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './app.routing';

import { HeroesComponent }  from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { AppComponent }   from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [HeroService],
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
