import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { GraphService } from '../../services/graph.service';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  tripData = {
    capitalOrigem: '',
    capitalDestino: '',
    precoCombustivel: 0,
    autonomiaKm: 0
  };

  result: any = null;
  errorMessage: string | null = null;

  constructor(private graphService: GraphService) {}

  onSubmit(): void {
    if (!this.tripData.capitalOrigem || !this.tripData.capitalDestino || !this.tripData.precoCombustivel || !this.tripData.autonomiaKm) {
      this.errorMessage = 'Todos os campos são obrigatórios';
      return;
    }
    if (this.tripData.precoCombustivel <= 0 || this.tripData.autonomiaKm <= 0) {
      this.errorMessage = 'Preço do combustível e autonomia devem ser números positivos';
      return;
    }

    this.graphService.calculateTrip(this.tripData).subscribe(
      data => {
        this.result = data;
        this.errorMessage = null;
        console.log('Resultado da busca:', data);
      },
      error => {
        this.errorMessage = error.error ? error.error : 'Erro desconhecido';
        console.log('Erro:', error);
      }
    );
  }
}
