import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatejobComponent } from './createjob/createjob.component';
import { JobListComponent } from './job-list/job-list.component';

const routes: Routes = [
  {path:'jobs',component:JobListComponent},
  {path:"createjob",component:CreatejobComponent},
  {path:"",redirectTo:'jobs',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
