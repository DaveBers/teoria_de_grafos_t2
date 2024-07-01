import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

}

interface info{
  capitalOrigem: string;
  capitalDestino: string;
  precoCombustivel: number;
  autonomiaKm: number;
}

function getInfo (): info {
  const capitalOrigem = (document.getElementById('capital_origem') as HTMLInputElement).value;
  const capitalDestino = (document.getElementById('capital_destino') as HTMLInputElement).value;
  const precoCombustivel = parseFloat((document.getElementById('preco_combustivel') as HTMLInputElement).value);
  const autonomiaKm = parseFloat((document.getElementById('autonomia_km') as HTMLInputElement).value);

  if (isNaN(precoCombustivel) || isNaN(autonomiaKm)) {
    throw new Error("Preço do combustível e Autonomia Km/l devem ser números.");
}

return {
    capitalOrigem,
    capitalDestino,
    precoCombustivel,
    autonomiaKm
};

}