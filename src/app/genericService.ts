import { BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class GenericServices{
    commentValue = new BehaviorSubject("");
   
    
}