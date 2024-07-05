import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private apiUrl = 'http://localhost:5000/graph';

  constructor(private http: HttpClient) {}

  getCapitals(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/capitals`);
  }

  calculateTrip(tripData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/calculate`, tripData);
  }
}
