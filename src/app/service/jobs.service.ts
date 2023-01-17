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
}