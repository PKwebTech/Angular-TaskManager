import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit {
  
  Designation:string="";
  UserName:string="";
  NoOfTeamMembers:number=0;
  TotalCostOfAllProject:number=0;
  PendingTasks:number=0;
  UpComingProjects:number=0;
  ProjectCost:number=0;
  CurrentExpenditure:number=0;
  AvaibleFunds:number=0;
  ToDay!:Date;
  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary:any[]=[];
  TeamMembers:any[]=[];

  

  constructor(private dashBoardService:DashboardService){}
  ngOnInit(): void {
    this.Designation="Team Leader";
    this.UserName="Jhone Smith";
    this.NoOfTeamMembers=67;
    this.TotalCostOfAllProject=240;
    this.PendingTasks=15;
    this.UpComingProjects=0.2;
    this.ProjectCost=210000;
    this.CurrentExpenditure=96781;
    this.AvaibleFunds=52353;
    this.ToDay=new Date();

    this.Clients=[
     "ABC Infotech Ltd", "DEF Software Solution","GHI Industrie"
    ]
    this.Projects=[
      "Project A","Project B","Project C","Project D"
    ]
     for(var i=2019;i>=2010;i--){
      this.Years.push(i);
     }
     this.TeamMembersSummary=this.dashBoardService.getTeamMemebersSummary();

     this.TeamMembers=[
      {
        Region:"East",Members:[
        {Id:1,Name:"Pravin",Status:"Avaible"},
        {Id:2,Name:"Mahesh",Status:"Avaible"},
        {Id:3,Name:"Rahul",Status:"Busy"},
        {Id:4,Name:"Vishal",Status:"Busy"},
      ]},
      {
        Region:"West",Members:[
        {Id:1,Name:"Pravin",Status:"Avaible"},
        {Id:2,Name:"Mahesh",Status:"Avaible"},
        {Id:3,Name:"Rahul",Status:"Busy"},
        {Id:4,Name:"Vishal",Status:"Busy"},
      ]},
      {
        Region:"North",Members:[
        {Id:1,Name:"Pravin",Status:"Avaible"},
        {Id:2,Name:"Mahesh",Status:"Avaible"},
        {Id:3,Name:"Rahul",Status:"Busy"},
        {Id:4,Name:"Vishal",Status:"Busy"},
      ]},
      {
        Region:"South",Members:[
        {Id:1,Name:"Pravin",Status:"Avaible"},
        {Id:2,Name:"Mahesh",Status:"Avaible"},
        {Id:3,Name:"Rahul",Status:"Busy"},
        {Id:4,Name:"Vishal",Status:"Busy"},
      ]},
     ]
  }
  onProjectChange(project:string){
   if(project=="Project A"){
    this.ProjectCost=210000;
    this.CurrentExpenditure=96781;
    this.AvaibleFunds=52353;
   }
   else if(project=="Project B"){
    this.ProjectCost=410000;
    this.CurrentExpenditure=66781;
    this.AvaibleFunds=55353;
   }
   else if(project=="Project C"){
    this.ProjectCost=310000;
    this.CurrentExpenditure=99781;
    this.AvaibleFunds=33353;
   }
   else if(project=="Project D"){
    this.ProjectCost=10000;
    this.CurrentExpenditure=88781;
    this.AvaibleFunds=42353;
   }
  }

}
