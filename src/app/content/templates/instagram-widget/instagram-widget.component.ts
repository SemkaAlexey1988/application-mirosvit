import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { InstagramService } from '../../../common/services/instagram.service';

@Component({
  selector: 'app-instagram-widget',
  templateUrl: './instagram-widget.component.html',
  styleUrls: ['./instagram-widget.component.scss']
})
export class InstagramWidgetComponent implements OnInit {

  loadWidget:boolean;
  curentPhoto; 
  angle = 0;
  directionNumber:any;
  timer:number;
  defaultVal:string;
  error:any;
  

  constructor(private InstagramService:InstagramService, private router: Router) { }

  ngOnInit() {
   
    this.loadWidget = false;  
    this.timer = 5000;
    this.defaultVal = 'minus';




    this.InstagramService
    .getPhoto()
    .subscribe((curentPhoto) => {
    this.curentPhoto = curentPhoto.data;
   // console.log(this.curentPhoto);
   this.loadWidget = true;
    },
    error => {this.error = error.message; console.log(error)
    });

    if(this.router.url == '/') {         
      const carouselCycle = setInterval(() => { 
      this.carouselMove(this.defaultVal);
      this.router.events.forEach((event) => {
       // console.log(event);
        if(event instanceof NavigationStart) {
          clearInterval(carouselCycle);   
        }
      });
    }, this.timer); 
  }




  }

  

 



  carouselMove(carouselVal) {
    
  if(this.router.url == '/') { 
    this.directionNumber

    carouselVal.id == 'minus' ? this.directionNumber = '-' : this.directionNumber = '' 

    let spin = document.getElementById("spin");
    if(spin){ 
    this.directionNumber == '' ?  this.angle = this.angle + 45 : this.angle = this.angle - 45
    spin.setAttribute("style","-webkit-transform: rotateY("+ this.angle +"deg); transform: rotateY("+ this.angle +"deg);");   
    }
    }

  }

      

}

