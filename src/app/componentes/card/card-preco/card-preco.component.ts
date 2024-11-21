import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-preco',
  templateUrl: './card-preco.component.html',
  styleUrl: './card-preco.component.css'
})
export class CardPrecoComponent {
	@Input() tipoDeJogo: string = "Digital PS5";
	@Input() precoDoJogo: string = "R$ 200,00";

}
