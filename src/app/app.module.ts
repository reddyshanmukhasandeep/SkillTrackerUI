import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingModule } from './routing/routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { UrlProviderService } from './services/url-provider.service';
import { AssociateSessionService } from './associate-session.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FilterNamePipe } from './filter-name.pipe';
import { FilterMobilePipe } from './filter-mobile.pipe';
import { FilterEmailPipe } from './filter-email.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    DashboardComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent,
    AddEmployeeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FilterNamePipe,
    FilterMobilePipe,
    FilterEmailPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule

  ],
  providers: [UrlProviderService,AssociateSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
