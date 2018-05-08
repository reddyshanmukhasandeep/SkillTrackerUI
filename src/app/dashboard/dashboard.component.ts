import { Component, OnInit } from '@angular/core';
import { Associate } from '../models/associate';
import {Router} from '@angular/router'
import { AssociateService } from '../services/associate.service';
import { AssociateSessionService } from '../associate-session.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[AssociateService]
})
export class DashboardComponent implements OnInit {

 associateList:Associate[]
associate:Associate;
 associate_id:number;
 p:number=1;
 name:string;
 mobile:string;
 email:string;
  constructor(private router:Router,private associateService:AssociateService,private associateSession:AssociateSessionService) { 
    this.associateService.getAssociates().subscribe(data=> { this.associateList=data,
    console.log("**Data in this.associateList***");
    console.log(this.associateList);
    
    })

  }

  ngOnInit() {
    this.associateSession.currentassociate_id.subscribe((id) =>{
      this.associate_id =id;
  })

}
getassociates(value){
     
  this.associateService.getAssociates().subscribe(data=> { this.associateList=data})
}

viewEmp(associate:Associate){
 this.associateSession.setAssociateId(associate.asc_ID)
  this.router.navigate([associate.asc_ID,'viewemp']);
}

editEmp(associate:Associate){
  
  this.associateSession.setAssociateId(associate.asc_ID)
  this.router.navigate([associate.asc_ID,'updateemp']);
}
deleteassociate(associate:Associate){
   this.associateList = this.associateList.filter(u => u !== associate)
  this.associateService.deleteAssociate(associate.asc_ID).subscribe()
}

addEmp(associate:Associate){
  
  
  this.router.navigate(['addemp']);
}

addSkill(){
  
  
  this.router.navigate(['skills']);
}

}

