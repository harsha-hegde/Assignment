import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class GetCommentService {
  url:string="https://jsonplaceholder.typicode.com/comments";
  constructor(private http:HttpClient) {

   }

  //get the comment value 
  getCommentValue():Observable<Object>{
    return this.http.get(this.url)
  }

}
