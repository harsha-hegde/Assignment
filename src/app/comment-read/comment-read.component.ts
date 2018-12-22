import { AuthService } from './../auth.service';
import { GetCommentService } from './get-comment.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { GenericServices } from '../genericService';

@Component({
  selector: 'app-comment-read',
  templateUrl: './comment-read.component.html',
  styleUrls: ['./comment-read.component.css']
})
export class CommentReadComponent implements OnInit {
  commentData;
  constructor(private comService:GetCommentService
    ,private router:Router,
    private genericService: GenericServices,
    private autservice:AuthService) { 
   
  }

  ngOnInit() {
    //check if the user is logged in
    if(!this.autservice.isLoggedIn()){
      this.router.navigateByUrl("");
    }else{
      this.commentData=this.comService.getCommentValue()
    }
  
  }
  //oepen comment value
  openComment(comment){
    console.log(comment);
   
    this.router.navigateByUrl("/comment-value")
    this.genericService.commentValue.next(comment)
  }

}
