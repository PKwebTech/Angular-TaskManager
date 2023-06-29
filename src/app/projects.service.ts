import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  
   BASE_URL="https://taskmanager-htn9.onrender.com/"
  constructor(private httpClient:HttpClient) { }

  getAllProject():Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(this.BASE_URL+"api/projects")
  }
  insertProject(newProject:Project):Observable<Project>{
    return this.httpClient.post<Project>(this.BASE_URL+"api/projects",newProject);
  }
}
