import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../../../common/services/authorization.service';
import { Advantages } from '../../../common/models/advantages.model';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  listAdvantages: Advantages[] = []; 
  loadAdvantages: boolean;
  error:any;

  constructor(private AuthorizationService:AuthorizationService) { }

  ngOnInit() {

    this.loadAdvantages = false;

    this.AuthorizationService
    .getAdvantages()
    .subscribe((listAdvantages: Advantages[]) => {
    this.listAdvantages = listAdvantages;
    this.loadAdvantages = true;
    
    },
    error => {this.error = error.message; console.log(error)
    });    

  }

}
