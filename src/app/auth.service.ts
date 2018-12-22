import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //check if the user is logged in 
  isLoggedIn(){
    let value:boolean;
    console.log(localStorage.getItem("token"))
    if(localStorage.getItem("token")==undefined){
      value= false;
    }else{
      value= true;
    }
    return value;
  }

}
