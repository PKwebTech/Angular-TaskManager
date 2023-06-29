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
  constructor(private projectService:ProjectsService){}
  ngOnInit(): void {
    this.projectService.getAllProject().subscribe((response:Project[])=>{
      this.projects=response;
    })
  }
  onSaveClick(){
    this.projectService.insertProject(this.newProject).subscribe((response)=>{
      this.newProject=response;
      this.projects.push(this.newProject)
      this.newProject.projectID=null;
      this.newProject.projectName=null;
      this.newProject.dateOfStart=null;
      this.newProject.teamSize=null;
    },(error)=>{
      console.log(error);
    });
  }

}
