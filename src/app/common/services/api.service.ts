import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

eventsUrl:string = 'https://localhost.com';

instagramUrl:string = `https://localhost.com`;
currencyUrl:string = `https://localhost.com&symbols=USD,GBP,JPY`;
weatherUrl:string = `https://localhost.com`;


  constructor() { }


 getEventsUrl(){
   return this.eventsUrl;
 } 

 getInstagramUrl(){
  return this.instagramUrl;
}

getCurrencyUrl(){
  return this.currencyUrl;
} 
getWeatherUrl(){
  return this.weatherUrl;
} 

}
