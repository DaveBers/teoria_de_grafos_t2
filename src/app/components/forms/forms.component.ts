import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent implements OnInit {
  capitals: string[] = [];
  start: string = '';
  end: string = '';
  path: string[] = [];

  
  constructor(private graphService: GraphService) {}

  ngOnInit(): void {
    this.graphService.getCapitals().subscribe((data) => {
      this.capitals = data.map((capital) => capital.name);
    });
  }

  findPath(): void {
    this.path = this.graphService.findCheapestPath(this.start, this.end);
  }
}