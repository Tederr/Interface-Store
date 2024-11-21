import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-rotulo',
  templateUrl: './card-rotulo.component.html',
  styleUrl: './card-rotulo.component.css'
})
export class CardRotuloComponent {
	@Input() rotuloDoJogo:string = "";

}
