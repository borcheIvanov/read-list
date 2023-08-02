import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


export interface IList {
  title:string,
  address:string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getReadingList(): Observable<IList[]> {
    return this.http.get<IList[]>(`${environment.apiEndpoint}/links`);
  }

  addLink(value: string) {
    return this.http.post(`${environment.apiEndpoint}/links`, {Link: value});
  }
}
