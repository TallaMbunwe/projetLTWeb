import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalarierComponent } from './salarier/salarier.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SalarierDetailsComponent } from './salarier-details/salarier-details.component';

const routes: Routes = [
  { path: 'salarier', component: SalarierComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: SalarierDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
