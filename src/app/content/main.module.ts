import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { MainRoutingModule } from './main.routing.module';



import { MainComponent } from './main.component';
import { HeaderComponent } from './templates/header/header.component';
import { InstagramWidgetComponent } from './templates/instagram-widget/instagram-widget.component';
import { SliderComponent } from './templates/slider/slider.component';
import { ContactBlockComponent } from './templates/contact-block/contact-block.component';
import { AdvantagesComponent } from './templates/advantages/advantages.component';
import { AboutComponent } from './templates/about/about.component';


import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SuccessComponent } from './success/success.component';
import { ContactsMainComponent } from './templates/contacts-main/contacts-main.component';

import { IframePipe } from '../common/pipes/iframe.pipe';

import { TextMaskModule } from 'angular2-text-mask';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    MainComponent,  
    SigninComponent,
    RegistrationComponent,
    HeaderComponent,
    InstagramWidgetComponent,
    NotFoundComponent,
    ContactsComponent,
    SuccessComponent,
    SliderComponent,
    ContactBlockComponent,
    AdvantagesComponent,
    AboutComponent,
    ContactsMainComponent,
    IframePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule, 
    NgbModule
  ],
  exports: [
    MainComponent
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class MainModule {}