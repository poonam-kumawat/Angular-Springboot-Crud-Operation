import { Component, OnInit } from '@angular/core';
import { Job } from '../job';
import { JobsService } from '../service/jobs.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  constructor(private jobservice: JobsService) {}
  ngOnInit() {
    this.getJobs();
    
  }
  private getJobs() {
    this.jobservice.getJobList().subscribe(data=>{
      this.jobs=data;
    })
    
  }
}
