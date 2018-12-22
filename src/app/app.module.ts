import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommentReadComponent } from './comment-read/comment-read.component';
import { CommentValueComponent } from './comment-value/comment-value.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GetCommentService } from './comment-read/get-comment.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommentReadComponent,
    CommentValueComponent,
  ],
 
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],

  providers: [GetCommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
