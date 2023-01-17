import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export interface IList {
  title:string,
  link:string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getReadingList(): Observable<IList[]> {
    return this.http.get<IList[]>("assets/data.json");
  }
}
