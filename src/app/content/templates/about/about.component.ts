import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { AuthorizationService } from '../../../common/services/authorization.service';
import { Contacts } from '../../../common/models/contacts.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  pageAbout: Contacts[] = [];
  pageAboutValue: any;  

  constructor(private AuthorizationService:AuthorizationService) { }

  loadAbout: boolean;
  error:any;

  ngOnInit() {

    this.AuthorizationService
    .getContacts()
    .subscribe((pageContacts: Contacts[]) => {
      
    this.pageAbout = pageContacts;
    this.loadAbout = true;
    this.pageAboutValue = pageContacts[0];
    // console.log(this.pageAboutValue);
    },
    error => {this.error = error.message; console.log(error);});

  }

}
