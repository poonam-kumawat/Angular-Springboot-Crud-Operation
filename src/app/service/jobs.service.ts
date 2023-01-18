import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from'rxjs'
import { Job } from '../job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private baseURL="http://localhost:8081/";
  constructor(private httpClient:HttpClient) { }

  getJobList(): Observable<Job[]>{
    return this.httpClient.get<Job[]>(`${this.baseURL}`);

  }

  createjob(job:Job):Observable<any>{
    return this.httpClient.post("http://localhost:8081/jobs",job);


  }
  getJobById(id:number):Observable<Job>{
    return this.httpClient.get<Job>(`http://localhost:8081/jobs/${id}`);

  }

  updateJob(id:number,job:Job):Observable<Object>{
    return this.httpClient.put(`http://localhost:8081/updatejobs/${id}`, job);
  }

  deletejob(id:number):Observable<Object>{
    return this.httpClient.delete(`http://localhost:8081/deletejob/${id}`);
  }
}
