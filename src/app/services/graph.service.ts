import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Capital, Neighbor } from '../models/graph.model';

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  private capitalsUrl = 'assets/capitais.json';
  private graph: Map<string, Capital> = new Map();

  constructor(private http: HttpClient) {
    this.loadCapitals();
  }

  private loadCapitals(): void {
    this.http.get<Capital[]>(this.capitalsUrl).subscribe((data) => {
      data.forEach((capital) => this.graph.set(capital.name, capital));
    });
  }

  getCapitals(): Observable<Capital[]> {
    return this.http.get<Capital[]>(this.capitalsUrl);
  }

  findCheapestPath(start: string, end: string): string[] {
    const distances: Map<string, number> = new Map();
    const previous: Map<string, string> = new Map();
    const queue: Set<string> = new Set();

    this.graph.forEach((capital, name) => {
      if (name === start) {
        distances.set(name, 0);
      } else {
        distances.set(name, Infinity);
      }
      queue.add(name);
    });

    while (queue.size > 0) {
      const current = Array.from(queue).reduce((a, b) => (distances.get(a)! < distances.get(b)! ? a : b));
      queue.delete(current);

      if (current === end) break;

      const capital = this.graph.get(current);
      if (capital) {
        for (const [neighbor, distance] of Object.entries(capital.neighbors)) {
          const alt = distances.get(current)! + distance + capital.toll;
          if (alt < distances.get(neighbor)!) {
            distances.set(neighbor, alt);
            previous.set(neighbor, current);
          }
        }
      }
    }

    const path: string[] = [];
    let u = end;
    while (previous.has(u)) {
      path.unshift(u);
      u = previous.get(u)!;
    }
    path.unshift(start);
    return path;
  }
}
