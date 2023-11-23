import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { IListItem } from "../models";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) {}

  getReadingList(): Observable<IListItem[]> {
    return this.http.get<IListItem[]>(`${environment.apiEndpoint}/links`);
  }

  addLink(value: string) {
    return this.http.post(`${environment.apiEndpoint}/links`, {Link: value});
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiEndpoint}/links/${id}`);
  }
  
  archive(id: string) {
    return this.http.patch(`${environment.apiEndpoint}/links/${id}`, {});
  }
}
