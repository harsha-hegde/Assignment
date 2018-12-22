import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  displayError=false;



   userObj={
     userName:"user",
     password:"password"
   }
  constructor(
    private router:Router) { }

  ngOnInit() {
    this.setFormGroupInstance();
  }
  
  //set the form group and control instances
  setFormGroupInstance():void{
    this.loginForm=new FormGroup({
      userName:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    })
  }

  //verify the user login and submit
  onSubmit():void{
    
    let  userName=this.loginForm.value.userName.toString().toLowerCase();
    let  password=this.loginForm.value.password
    if(this.userObj.userName===userName&&this.userObj.password===password){
      localStorage.setItem("token",userName)
      this.router.navigateByUrl("/comment")
    }else{

      this.openLoginError();
    }  
    
    
  }
  
  //open the warning messages 
  openLoginError(){
    this.displayError=true;
    setTimeout(()=>{
      this.displayError=false;
    },1000)
  }


}
