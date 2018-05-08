import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http'
import {UrlProviderService} from './url-provider.service'
import { Observable } from 'rxjs/Observable';
import { Skills } from '../models/skills';

@Injectable()
export class SkillsService {
  private skillUrl:string

  constructor(private http:HttpClient,private urlproviderService:UrlProviderService) {
     this.skillUrl = urlproviderService.getCompleteURL("skills/");
   }
   getSkills():Observable<Skills[]>{
      
       return this.http.get<Skills[]>(this.skillUrl);
  }
  postSkills(Skill):Observable<Skills>{
    
     return this.http.post<Skills>(this.skillUrl,Skill);
  }
  deleteSkill(id){
    return this.http.delete(this.skillUrl+id)
    
  }
  updateSkill(Skill):Observable<Skills>{
    return this.http.put<Skills>(this.skillUrl,Skill);
  }
  getSkillsById(id):Observable<Skills>{
      
    return this.http.get<Skills>(this.skillUrl+id);
}
}
