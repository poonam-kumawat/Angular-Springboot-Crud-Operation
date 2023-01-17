import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../job';
import { JobsService } from '../service/jobs.service';

@Component({
  selector: 'app-updatejob',
  templateUrl: './updatejob.component.html',
  styleUrls: ['./updatejob.component.css']
})
export class UpdatejobComponent  implements OnInit{
  job:Job=new Job();
  id!: number;
  constructor(private jobService:JobsService,
    private router:ActivatedRoute){

  }
  ngOnInit():void{
    this.id=this.router.snapshot.params['id'];
    this.jobService.getJobById(this.id).subscribe(data=>{
      this.job=data;

    },error=>console.error(error)
    )

  }

  onSubmit(){

  }

}
