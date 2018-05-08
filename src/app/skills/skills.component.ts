import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { Router } from '@angular/router'
import { Skills } from '../models/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [SkillsService]
})
export class SkillsComponent implements OnInit {
  constructor(private skillService: SkillsService, private router: Router) { }

  check: boolean = false;
  editableInput: boolean = false;
  SkillList: Skills[];
  input={}

  ngOnInit() {
    this.skillService.getSkills().subscribe(data => {
    this.SkillList = data;
      console.log(this.SkillList)
    })
  }
 
  addSkill(Skillname) {

    console.log("Inside Add Skill");
    console.log(Skillname);

    this.input["skillName"]=Skillname;
    this.input["points"]=0;
   
      

    if (Skillname == '' || Skillname == undefined) {
      this.check = true;
      console.log(this.check)

    }
    else {
      console.log("Else Block");
      console.log(this.input);
      this.skillService.postSkills(this.input).subscribe(data => { 
       this.SkillList.push(data); 
      
      }
      );

    }

    console.log(this.SkillList);


  }

  updateSkill(Skill) {
    if (Skill == '' || Skill == undefined) {
      this.check = true;
      console.log(this.check)

    }
    else {
      this.skillService.updateSkill(Skill).subscribe(data => { this.check = false });

    }
    console.log(this.SkillList);

  }
  editableInputs(Skill) {
    this.editableInput = !this.editableInput
    if (!this.editableInput) {
      this.updateSkill(Skill)

    }
  }
  deleteSkill(Skill) {
    this.SkillList = this.SkillList.filter(u => u !== Skill)
    this.skillService.deleteSkill(Skill.skillId).subscribe()

  }
}


