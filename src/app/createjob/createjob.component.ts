import { Component } from '@angular/core';
import { Job } from '../job';

@Component({
  selector: 'app-createjob',
  templateUrl: './createjob.component.html',
  styleUrls: ['./createjob.component.css']
})
export class CreatejobComponent {
  job: Job=new Job();
  constructor(){
    
  }

  onSubmit(){
      
  }

}
