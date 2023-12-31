import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './admin/dashboard/dashboard.component'
import { AboutComponent } from './admin/about/about.component'
import { PorjectsComponent } from './admin/projects/projects.component'
import { LoginComponent } from './login/login.component'
import { CanActivateGuardService } from './can-activate-guard.service'

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateGuardService],
    data: {
      expectedRole: 'Admin',
    },
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'project',
    component: PorjectsComponent,
    canActivate: [CanActivateGuardService],
    data: {
      expectedRole: 'Admin',
    },
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
