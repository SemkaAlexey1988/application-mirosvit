import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { Users } from 'src/app/common/models/users.model';
import { SigninService } from 'src/app/common/services/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-events',
  templateUrl: './header-events.component.html',
  styleUrls: ['./header-events.component.scss']
})
export class HeaderEventsComponent implements OnInit {

  

  curentUser: any;
  userName: string;
  userSurname: string;
  status: boolean = false;
  statusMain: boolean = false;
  showAuthorizationInfo: boolean;
  showUserInfo: boolean;

  @ViewChild("mobileMenu") mobileMenu;
  @ViewChild("userBlock") userBlock;
  @HostListener('document:click', ['$event.target'])

  
 

  public onClick(targetElement) {


    if(this.userBlock){
    const clickedInside = this.userBlock.nativeElement.contains(targetElement);
    if (!clickedInside) {
      if(this.status == true){
        this.status = false;
      }
    }
  }
  if(this.mobileMenu){
    const clickedInsideMenu = this.mobileMenu.nativeElement.contains(targetElement);
    if (!clickedInsideMenu) {
      if(this.statusMain == true){
        this.statusMain = false;
      }
    }
  }

  } 
  

  constructor(
    private SigninService:SigninService,
    private routerMain:Router
    
    ) { }

  ngOnInit() {

  

    this.curentUser = JSON.parse(window.localStorage.getItem('curentUser'));
    if(this.curentUser){
      this.userName = this.curentUser.name;
      this.userSurname = this.curentUser.surname;
      this.showAuthorizationInfo = false;
      this.showUserInfo = true;
    }else{
      this.userName = '';
      this.userSurname = '';
      this.showAuthorizationInfo = true;
      this.showUserInfo = false;
    }



  }


 
  
  
   




  logOut(){
    this.SigninService.isLogout();
    this.routerMain.navigate(['/signin']);
    this.userName = '';
    this.userSurname = '';
    this.showAuthorizationInfo = true;
    this.showUserInfo = false;
  }

  toggleMenu(mobileMenu){
    this.status = !this.status; 

  }

  toggleMenuMain(mobileMenuMain){
    this.statusMain = !this.statusMain; 

  }
  
  
  

}
