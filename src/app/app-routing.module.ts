import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalarierComponent } from './salarier/salarier.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SalarierDetailsComponent } from './salarier-details/salarier-details.component';

const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  //{ path: '', pathMatch: 'full', redirectTo: 'register' },
  { path: 'salarier', component: SalarierComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SalarierDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
