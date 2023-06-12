import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { swapiReducer } from 'src/redux/swapi/swapi.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SwapiEffects } from 'src/redux/swapi/swapi.effects';
import { SwapiService } from 'src/redux/swapi/swapi.service';
import { HttpClientModule } from '@angular/common/http';
import { TestPageComponent } from './test-page/test-page.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    StoreModule.forRoot({
      swapi: swapiReducer
    }),
    EffectsModule.forRoot([SwapiEffects]),
    HttpClientModule
  ],
  providers: [SwapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
