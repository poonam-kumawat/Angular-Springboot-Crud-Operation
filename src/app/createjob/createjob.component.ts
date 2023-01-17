import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Job } from '../job';
import { JobsService } from '../service/jobs.service';

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent {
  job: Job=new Job();
  constructor(private jobService:JobsService,
    private router:Router){
    
  }

  saveJob(){
    this.jobService.createjob(this.job).subscribe(data=>{
      console.log(data);
      this.goToJobList();
    },
    error=>console.log(error));
    
  }

  goToJobList(){
    this.router.navigate(['/jobs']);

  }

  onSubmit(){
      console.log(this.job);
      this.saveJob();
  }

}
