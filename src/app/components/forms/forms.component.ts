import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent {
  tripData = {
    capitalOrigem: '',
    capitalDestino: '',
    precoCombustivel: '',
    autonomiaKm: ''
  };

  result: any = null;

  constructor(private graphService: GraphService) {}

  onSubmit(): void {
    this.graphService.calculateTrip(this.tripData).subscribe(data => {
      this.result = data;
      console.log('Resultado da busca:', data);
    });
  }
}