import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { CdkMenuTrigger } from "@angular/cdk/menu";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { DataService } from "./services/data.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatIconModule,
    MatMenuModule,
    CdkMenuTrigger,
    HttpClientModule
  ],
  providers: [HttpClient, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
