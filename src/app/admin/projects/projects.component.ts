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
  constructor(private projectService:ProjectsService){}
  ngOnInit(): void {
    this.projectService.getAllProject().subscribe((response:Project[])=>{
      this.projects=response;
    })
  }

}
