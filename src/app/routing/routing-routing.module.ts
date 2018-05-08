import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SkillsComponent } from '../skills/skills.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { ViewEmployeeComponent } from '../view-employee/view-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

const routes: Routes = [

    {path:'' , pathMatch: 'full' ,redirectTo:'/dashboard'},
    {path:'dashboard', component: DashboardComponent},
    {path:'addemp',component:AddEmployeeComponent},
    {path:':id/viewemp',component:ViewEmployeeComponent},
    {path:':id/updateemp',component:UpdateEmployeeComponent},
    {path:'skills',component:SkillsComponent},
    {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
