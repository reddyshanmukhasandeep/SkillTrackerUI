import { Component, OnInit,ViewChild } from '@angular/core';
import { Associate } from '../models/associate';
import { AssociateService } from '../services/associate.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SkillsService } from '../services/skills.service';
import { Skills } from '../models/skills';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers:[AssociateService,SkillsService]
})
export class AddEmployeeComponent implements OnInit {
  associateForm:FormGroup;
associate={};
associateList:Associate[];
SkillList: Skills[];
input={}
@ViewChild('AccUserImg') AccUserImage;
AccUserImageFile: File;


  constructor(private skillService: SkillsService,private associateService:AssociateService,private router:Router) { }

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
      level: new FormControl('', [<any>Validators.required])
    
  })
  }
  
addAssociate() 
{
  const Image = this.AccUserImage.nativeElement;

  if (Image.files && Image.files[0]) {
    this.AccUserImageFile = Image.files[0];
  }
  const ImageFile: File = this.AccUserImageFile;
  console.log(ImageFile);
  console.log("Add associate");
  //console.log(this.selectedFile);
  
  this.associate=this.associateForm.value;
//  this.associate["pic"] = this.AccUserImage;

  this.associate[this.associateForm.value.status] = true;
  this.associate[this.associateForm.value.level] = true;
  console.log("******Associate Form****");
  console.log(this.associateForm);
  // console.log(this.associateForm.value.pic);
  // console.log("****PICS DETAILS****");
 
  console.log("After Assigning");
  console.log(this.associate);
  
  delete this.associate["level"];
  delete this.associate["status"];
 
  console.log(JSON.stringify(this.associate));
    this.associateService.postAssociate(this.associate).subscribe(data =>
  {
    this.router.navigate(['dashboard']);
    console.log("Save");
    
  });
    
  
  
}


imageUrl: any;
selectedFile


 imageUpload(event) {
  let reader = new FileReader();
  if(event.target.files && event.target.files.length > 0) {
    this.selectedFile= event.target.files[0];
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.associateForm.get('pic').setValue({
        filename: this.selectedFile.name,
        filetype: this.selectedFile.type,
        value: reader.result.split(',')[1]
        
      })
     // this.associateForm.get('pic').setValue({value: reader.result.split(',')[1]});
      console.log(this.associateForm);

    };
  }
 
  
}
 
rangeSlider(Skill)
{
  
  
    console.log("Inside Add Skill");
    console.log(Skill);

     this.skillService.updateSkill(Skill).subscribe(data => { 
 
      }
      );

    }
    check:boolean = false;
    addSkill(Skillname) {

      console.log("Inside Add Skill");
      console.log(Skillname);
  
      this.input["skillName"]=Skillname;
      this.input["points"]=0;
     
  
      if (Skillname == '' || Skillname == undefined) {
       console.log("Undefined Name");
       this.check = true
       
  
      }
      else {
        console.log("Else Block");
        this.check = false;
        console.log(this.input);
        this.skillService.postSkills(this.input).subscribe(data => { 
                this.SkillList.push(data)
           
        }
        );
        
  
      }
  
      console.log(this.SkillList);
  
  
    }
}
