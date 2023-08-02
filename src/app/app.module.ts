import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { CdkMenuTrigger } from "@angular/cdk/menu";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { DataService } from "./services/data.service";
import { CommonModule } from "@angular/common";
import { ContentComponent } from './components/content/content.component';
import { Route, RouterModule } from "@angular/router";
import { AddLinkComponent } from './components/add-link/add-link.component';
import { ReactiveFormsModule } from "@angular/forms";

const routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'add-link',
    component: AddLinkComponent
  }
] as Route[];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AddLinkComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    MatIconModule,
    MatMenuModule,
    CdkMenuTrigger,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
