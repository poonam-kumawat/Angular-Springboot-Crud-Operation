import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../job';
import { JobsService } from '../service/jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  constructor(private jobservice: JobsService,private router:Router) {}
  ngOnInit() {
    this.getJobs();
    
  }
  private getJobs() {
    this.jobservice.getJobList().subscribe(data=>{
      this.jobs=data;
    })
    
  }

  updatejob(id:number){
    this.router.navigate(["/updatejob",id])

  }
  deletejob(id:number){
    this.jobservice.deletejob(id).subscribe(data=>{
      console.log(data);
      this.getJobs();
    },error=>console.log(error))


  }

  addjobs(){
    this.router.navigate(["/createjob"]);
  }
}
