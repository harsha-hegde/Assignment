import { Router } from '@angular/router';
import { GenericServices } from './../genericService';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscribable, Subscriber, Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-comment-value',
  templateUrl: './comment-value.component.html',
  styleUrls: ['./comment-value.component.css']
})
export class CommentValueComponent implements OnInit,OnDestroy{
 
  commentvalue={};
  subScriber:Subscription;
  constructor(private genericService:GenericServices,
    private router:Router,
    private autservice:AuthService) {
   
   }

  ngOnInit() {
    if(!this.autservice.isLoggedIn()){
      this.router.navigateByUrl("");
    }else{
      this.subScriber= this.genericService.commentValue
    .subscribe(data=>{
    this.commentvalue=(data);
     console.log(this.commentvalue)
    })
    }
    
  }
  ngOnDestroy(): void {
   this.subScriber.unsubscribe();
  }
  //navigating to comment value
  navigateBack(){
    this.router.navigateByUrl("/comment")
  }
}
