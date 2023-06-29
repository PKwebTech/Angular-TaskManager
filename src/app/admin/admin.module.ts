import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { PorjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    PorjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DashboardComponent,MyProfileComponent,AboutComponent,PorjectsComponent]
})
export class AdminModule { }
