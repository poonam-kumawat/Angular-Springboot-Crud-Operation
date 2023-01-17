import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './job-list/job-list.component';
import { CreatejobComponent } from './createjob/createjob.component';
import {FormsModule} from '@angular/forms';
import { UpdatejobComponent } from './updatejob/updatejob.component'
@NgModule({
  declarations: [
    AppComponent,
    JobListComponent,
    CreatejobComponent,
    UpdatejobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
