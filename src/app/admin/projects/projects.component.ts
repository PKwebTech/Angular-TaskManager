import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-porjects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class PorjectsComponent implements OnInit {
  
  projects!:Project[];
  newProject:Project=new Project();
  editProject:Project=new Project();
  editIdex:number=0;
  deleteProject:Project=new Project();
  deleteIndex:number=0;
  searchBy:string="ProjectName";
  searchText:string="";
  constructor(private projectService:ProjectsService){}
  ngOnInit(): void {
    this.projectService.getAllProject().subscribe((response:Project[])=>{
      this.projects=response;
    });
  }
  onSaveClick(){
    this.projectService.insertProject(this.newProject).subscribe((response)=>{      
      this.newProject=response;
      this.projects.push(this.newProject)
      
    },(error)=>{
      console.log(error);
    });
  }
  onEditClick(event:any,index:number){
   this.editProject.projectID=this.projects[index].projectID;
   this.editProject.projectName=this.projects[index].projectName;
   this.editProject.dateOfStart=this.projects[index].dateOfStart;
   this.editProject.teamSize=this.projects[index].teamSize;
   this.editIdex=index;
  }
  onUpdateClick(){
   this.projectService.updateProject(this.editProject).subscribe((response:Project)=>{
   var p:Project=new Project();
   p.projectID=response.projectID;
   p.projectName=response.projectName;
   p.dateOfStart=response.dateOfStart;
   p.teamSize=response.teamSize;
   this.projects[this.editIdex]=p;
   this.editProject.projectID=null;
   this.editProject.projectName=null;
   this.editProject.dateOfStart=null;
   this.editProject.teamSize=null;
   },()=>{})
  }
  onDeleteClick(event:any,index:number){
    this.deleteIndex=index;
    this.deleteProject.projectID=this.projects[index].projectID;
    this.deleteProject.projectName=this.projects[index].projectName;
    this.deleteProject.dateOfStart=this.projects[index].dateOfStart;
    this.deleteProject.teamSize=this.projects[index].teamSize;

  }
  OnDeleteConfirmClick(){
   this.projectService.deleteProject(this.deleteProject.projectID).subscribe((response)=>{
   this.projects.splice(this.deleteIndex,1);
   this.deleteProject.projectID=null;
   this.deleteProject.projectName=null;
   this.deleteProject.dateOfStart=null;
   this.deleteProject.teamSize=null;
   },(error)=>{
    console.log(error);
    
   })
  }
  onSearchClick(){
    console.log(this.searchBy);
    console.log(this.searchText)
    
    this.projectService.SearchProject(this.searchBy,this.searchText).subscribe((response:Project[])=>{
      this.projects=response;
    })
  }
}
