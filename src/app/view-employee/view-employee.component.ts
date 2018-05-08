import { Component, OnInit } from '@angular/core';
import { Associate } from '../models/associate';
import { AssociateService } from '../services/associate.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SkillsService } from '../services/skills.service';
import { Skills } from '../models/skills';
import { AssociateSessionService } from '../associate-session.service';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
  providers:[AssociateService,SkillsService]

})
export class ViewEmployeeComponent implements OnInit {
  associateForm:FormGroup;
  associate;
  associateList:Associate[];
  SkillList: Skills[];
  input={}
  asc_id:number
    constructor(private skillService: SkillsService,private associateSession:AssociateSessionService,private associateService:AssociateService,private router:Router) { 

      this.associateSession.currentassociate_id.subscribe(id =>{
        console.log("id present in Edit compnet  "+id);
        this.asc_id =id;

        this.associateService.getAssociateById(this.asc_id).subscribe(
          data => {this.associate =data
          console.log(this.associate);
          console.log("*******Associate Details");
          
          
          }
        )
        
      }
        );
    }
  
    ngOnInit() {
      this.skillService.getSkills().subscribe(data => {
        this.SkillList = data;
          console.log(this.SkillList)
        })
  
  
      this.associateForm = new FormGroup ({
        name: new FormControl('', [<any>Validators.required, Validators.minLength(5)]),
        email: new FormControl('', [<any>Validators.required]),
        mobile:new  FormControl('',[<any>Validators.required,Validators.minLength(10)]),
        remark:new FormControl('',[<any>Validators.required,Validators.minLength(5)]),
        associateID:new FormControl('',[<any>Validators.required,Validators.minLength(5)]),
        strength:new FormControl('',[<any>Validators.required,Validators.minLength(5)]),
        weakness:new FormControl('',[<any>Validators.required,Validators.minLength(5)]),
        status:new FormControl('', [<any>Validators.required]),
        level: new FormControl('', [<any>Validators.required]),
    })
    }
  updateAssociate(associate) 
  {
    this.associate=this.associateForm.value;
     this.associate["asc_ID"] = this.asc_id
    this.associate[this.associateForm.value.status] = true;
    this.associate[this.associateForm.value.level] = true;
    delete this.associate["level"];
    delete this.associate["status"];
   
    console.log(JSON.stringify(this.associate));
      this.associateService.putAssociate(this.associate).subscribe(data =>
    {
     this.router.navigate(['dashboard'])
     
    });
      
    
    
  }
  rangeSlider(Skill) {
    
    
      console.log("Inside Add Skill");
      console.log(Skill);
  
       this.skillService.updateSkill(Skill).subscribe(data => { 
          
        
        
        }
        );
  
      }
      addSkill(Skillname) {
  
        console.log("Inside Add Skill");
        console.log(Skillname);
    
        this.input["skillName"]=Skillname;
        this.input["points"]=0;
       
        
    
        if (Skillname == '' || Skillname == undefined) {
         console.log("Undefined Name");
         
    
        }
        else {
          console.log("Else Block");
          console.log(this.input);
          this.skillService.postSkills(this.input).subscribe(data => { 
                  this.SkillList.push(data)
             
          }
          );
          
    
        }
    
        console.log(this.SkillList);
    
    
}}