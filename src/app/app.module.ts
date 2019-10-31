import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ClickOutsideModule } from 'ng-click-outside';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './content/main.module';
import { EventsModule } from './events/events.module';

import { AuthorizationService } from './common/services/authorization.service';
import { EventsService } from './common/services/events.service';
import { SigninService } from './common/services/signin.service';
import { CurrencyService } from './common/services/currency.service';
import { InstagramService } from './common/services/instagram.service';
import { WeatherService } from './common/services/weather.service';
import { ApiService } from './common/services/api.service';


import { AppComponent } from './app.component';
import { GuardService } from './common/services/guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    MainModule,
    EventsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ClickOutsideModule,
    BrowserAnimationsModule
  ],
  providers: [AuthorizationService, EventsService, SigninService, GuardService, CurrencyService, InstagramService, WeatherService, ApiService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
