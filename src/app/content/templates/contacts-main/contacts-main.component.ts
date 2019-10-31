import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { AuthorizationService } from '../../../common/services/authorization.service';
import { Contacts } from '../../../common/models/contacts.model';

@Component({
  selector: 'app-contacts-main',
  templateUrl: './contacts-main.component.html',
  styleUrls: ['./contacts-main.component.scss']
})
export class ContactsMainComponent implements OnInit {

  blockContacts: Contacts[] = [];
  blockContactsValue: any;  

  constructor(private AuthorizationService:AuthorizationService) { }

  loadContacts: boolean;
  error:any;

  ngOnInit() {

    this.AuthorizationService
    .getContacts()
    .subscribe((pageContacts: Contacts[]) => {
      
    this.blockContacts = pageContacts;
    this.loadContacts = true;
    this.blockContactsValue = pageContacts[0];
    // console.log(this.blockContactsValue);
    },
    error => {this.error = error.message; console.log(error);});    

  }

}
