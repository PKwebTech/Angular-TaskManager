import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, map } from 'rxjs'
import { Project } from './project'
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  BASE_URL = 'https://taskmanager-htn9.onrender.com/'
  constructor(private httpClient: HttpClient) {}

  getAllProject(): Observable<Project[]> {
    // var currentUser={token:""};
    // var headers=new HttpHeaders();
    // headers=headers.set("Authorization","Beare");
    // if(sessionStorage['currentUser']!=null){
    //   currentUser=JSON.parse(sessionStorage['currentUser']);
    //   headers=headers.set("Authorization","Beare "+currentUser.token)
    // }
    return this.httpClient.get<Project[]>(this.BASE_URL + 'api/projects')
    // .pipe(map(
    //   (data:Project[])=>{
    //     for(let i=0;i<data.length;i++){
    //       data[i].teamSize=data[i].teamSize*100;
    //     }
    //     return data;
    //   }
    // ))
  }
  insertProject(newProject: Project): Observable<Project> {
    var requestHeaders = new HttpHeaders()
    requestHeaders.set('X-XSRF-TOKEN', sessionStorage['XSRFRequestToken'])
    return this.httpClient.post<Project>(
      this.BASE_URL + 'api/projects',
      newProject
    )
  }
  updateProject(existingProject: Project): Observable<Project> {
    return this.httpClient.put<Project>(
      this.BASE_URL + 'api/projects',
      existingProject
    )
  }
  deleteProject(ProjectId: number): Observable<string> {
    return this.httpClient.delete<string>(
      this.BASE_URL + 'api/projects?ProjectID=' + ProjectId
    )
  }
  SearchProject(searchBy: string, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(
      this.BASE_URL + 'api/projects/search/' + searchBy + '/' + searchText,
      { responseType: 'json' }
    )
  }
}
