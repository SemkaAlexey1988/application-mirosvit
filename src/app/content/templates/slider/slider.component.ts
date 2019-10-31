import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { AuthorizationService } from '../../../common/services/authorization.service';
import { Gallery } from '../../../common/models/gallery.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig]  
})
export class SliderComponent implements OnInit {

  listGallery: Gallery[] = []; 
  loadGallery: boolean;
  error:any;

  constructor(config:NgbCarouselConfig, private AuthorizationService:AuthorizationService) { 
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;

  }



  ngOnInit() {

this.loadGallery = false;

this.AuthorizationService
.getPhotos()
.subscribe((listGallery: Gallery[]) => {
this.listGallery = listGallery;
this.loadGallery = true;
//console.log(this.listGallery);
},
error => {this.error = error.message; console.log(error)
});


  }

}
