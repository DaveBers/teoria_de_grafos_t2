import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GraphService {
  private apiUrl = 'http://localhost:5000/graph'; // URL do backend
  
  constructor(private http: HttpClient) {}

  calculateTrip(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/calculate`, data);
  }
}
