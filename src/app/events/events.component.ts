import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { TestComponent} from './templates/test/test.component';




@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})






export class EventsComponent implements OnInit {



  

public name: string;
public surname: string;
public windowWidth: any;
public mobileVersion: number = 767;
public mobileMenu: boolean;
public desktopMenu: boolean;



seoTitle:string;

  constructor(
    private title: Title, 
    private meta: Meta  
  ) { }

  onResize(event){
    this.windowWidth = window.innerWidth;
if(this.windowWidth > this.mobileVersion){
      this.mobileMenu = false;
      this.desktopMenu = true;
        }else{
      this.mobileMenu = true;
      this.desktopMenu = false;    
        }     
  }  


  ngOnInit() {
    
  this.windowWidth = window.innerWidth;

  if(this.windowWidth > this.mobileVersion){
this.mobileMenu = false;
this.desktopMenu = true;
  }else{
this.mobileMenu = true;
this.desktopMenu = false;    
  }


    this.seoTitle = 'You events application page';

    this.title.setTitle(this.seoTitle);
    this.meta.removeTag("name='keywords'");
    this.meta.removeTag("name='description'");
    this.meta.addTags([
  {name:'description', content: `${this.seoTitle} for plan activity`},    
  {name:'keywords', content: `events, application`}
  ]); 



this.name = 'Victor';
this.surname = 'Sanchez';

    }

    @ViewChild(TestComponent)
    private quantityComponent: TestComponent;
     
    plus() { this.quantityComponent.plus(); }
    minus() { this.quantityComponent.minus(); } 
   




}
