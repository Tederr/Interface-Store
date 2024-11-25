import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

	@Input() capaDoJogo: string = "";
	@Input() rotuloDoJogo:string = "";
	@Input() tipoDeJogo: string = "Digital PS5";
	@Input() precoDoJogo: string = "R$ 200,00";
	@Input() id: string = "0";
}
