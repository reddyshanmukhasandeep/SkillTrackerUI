import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AssociateSessionService {

  private common_id = new BehaviorSubject<number>(1);
  currentassociate_id:Observable<number>
 
  
   constructor() { 
        this.currentassociate_id=this.common_id.asObservable();
       
    }
   
    setAssociateId(currentassociate_id:number){
     
       this.common_id.next(currentassociate_id)
      }

}
