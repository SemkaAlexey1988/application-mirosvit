import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthorizationService } from '../../../common/services/authorization.service';
import { Contacts } from '../../../common/models/contacts.model';

@Component({
  selector: 'app-contact-block',
  templateUrl: './contact-block.component.html',
  styleUrls: ['./contact-block.component.scss']
})





export class ContactBlockComponent implements OnInit {


 

pageContacts: Contacts[] = [];
pageContactsValue: any;  

showContent:boolean;  
  

  constructor(private router: Router, private AuthorizationService:AuthorizationService) { }

  loadContacts: boolean;
  messageSuccess: boolean;
  imputLength: number;
  form: FormGroup; 

  titleForm: string;
  buttonForm: string;

  nameValue:string;
  emailValue:string;
  messageValue:string;
  error:any;

  userName:string;
  userEmail:string;
  userMessage:string;  

  statusModal:boolean;

  yCord: boolean;
  xCord: boolean;
 
 
  
ngOnInit() {

  this.yCord = false;
  this.xCord = false;

  this.nameValue = "";
  this.emailValue = "";
  this.messageValue = "";
  this.titleForm = 'Contact us';
  this.buttonForm = 'Sеnd';
  this.messageSuccess = false;
  this.imputLength = 3; 

  this.statusModal = false;

  this.AuthorizationService
  .getContacts()
  .subscribe((pageContacts: Contacts[]) => {
    
  this.pageContacts = pageContacts;
  this.loadContacts = true;
  this.pageContactsValue = pageContacts[0];
 // console.log(this.pageContactsValue);
  },
  error => {this.error = error.message; console.log(error);});



  this.form = new FormGroup({
    name: new FormControl('', [Validators.required, this.checkMinLength.bind(this), Validators.pattern("[a-zA-Zа-яА-Я- ]{2,30}")]),
    email: new FormControl('', [Validators.required, Validators.email, this.checkMinLength.bind(this)]),
    message: new FormControl('', [Validators.required])
  });



    
   
  this.showContent = false; 

    window.addEventListener('scroll', this.scrollEvent, true);

    if(this.router.url == '/') { 
      let contactBlock = document.getElementById('contact-block');
      if(contactBlock){
        let contactBlockHeight = contactBlock.clientHeight; 
        let contactBlockOffset = window.pageYOffset;
        let contactBlockWidth = document.body.clientWidth;
        if (contactBlockWidth > 1200) {

          contactBlockOffset > 1 ? this.showContent = true : this.showContent = false          
      }
    }    

  }
}






checkMinLength(control: FormControl){
  if (control.value.length >= this.imputLength ){
      return null;
  
  }else {
    return {"shortValueError": true};
  }
    }  

    onSubmit(){
      //console.log(this.form);
      this.userName = this.form.value.name;
      this.userEmail = this.form.value.email;
      this.userMessage = this.form.value.message;
      
      
      
      this.AuthorizationService
      .addMessage(this.userName, this.userEmail, this.userMessage)
      .subscribe((response) => {
      
      
        this.form = new FormGroup({
          name: new FormControl('', [Validators.required, this.checkMinLength.bind(this), Validators.pattern("[a-zA-Zа-яА-Я- ]{2,30}")]),
          email: new FormControl('', [Validators.required, Validators.email, this.checkMinLength.bind(this)]),
          message: new FormControl('', [Validators.required])
        });
      
      this.messageSuccess = true;
      
      setInterval(()=>{
        this.messageSuccess = false;
      },5000)
      
      
      },
      error => {this.error = error.message; console.log(error);});
      
      
            } 
            
closeModal(){
  this.statusModal = false;  
} 

showModal(){
  this.statusModal = true;  
}

closeModalBlock(event){
  var clickX = event.pageX - pageXOffset;
  var clickY = event.pageY - pageYOffset;
  var ModalBlock = document.getElementById('modal-block-second');
  var ModalBlockCords = ModalBlock.getBoundingClientRect();
  var leftCords = ModalBlockCords.left;
  var rightCords = ModalBlockCords.right;
  var topCords = ModalBlockCords.top;
  var bottomCords = ModalBlockCords.bottom;
  if(clickX < leftCords || clickX > rightCords){    
this.xCord = true;
}else{
this.xCord = false;
  }

  if(clickY < topCords || clickY > bottomCords){    
   this.yCord = true;
   }else{
   this.yCord = false;       
      }  
      
 if(this.xCord || this.yCord){
   this.statusModal = false;  
 }    

 } 


scrollEvent = (event: any): void => {
  let contactBlock = document.getElementById('contact-block');
  let contactBlockHeight = contactBlock.clientHeight; 
  var catBox = contactBlock.getBoundingClientRect();
  var catBoxValue = catBox.top;
  var catBoxSize = catBoxValue - contactBlockHeight;
  
  //console.log(catBoxValue);
  catBoxSize < 350 ? this.showContent = true : this.showContent = false
    
}

ngOnDestroy() {
  window.removeEventListener('scroll', this.scrollEvent, true);
}







      
  





}
