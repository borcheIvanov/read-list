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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { ArchiveComponent } from "./components/archive/archive.component";

const routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'add-link',
    component: AddLinkComponent
  },
  {
    path: 'archive',
    component: ArchiveComponent
  }
] as Route[];

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    AddLinkComponent,
    SkeletonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule,
    MatIconModule,
    MatMenuModule,
    CdkMenuTrigger,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClient, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
