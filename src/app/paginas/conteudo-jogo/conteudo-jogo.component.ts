import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dadosFake	} from '../../../dados/dadosFakes';

@Component({
	selector: 'app-conteudo-jogo',
	templateUrl: './conteudo-jogo.component.html',
	styleUrl: './conteudo-jogo.component.css',
})
export class ConteudoJogoComponent implements OnInit{
	nomeDoJogo: string = '';
	capaDoJogo: string = '';
	descricaoDoJogo: string = '';
	precoDoJogo: string = '';
	private id: string | null = '0';

	constructor(private rota: ActivatedRoute) {}

	ngOnInit(): void {
		this.rota.paramMap.subscribe((valor) => (this.id = valor.get('id')))

    this.sentandoValoresDoComponente(this.id)
	}

	sentandoValoresDoComponente(id: string | null) {
		const resultado = dadosFake.filter( valor => valor.id == id)[0]
		this.nomeDoJogo = resultado.nomeDoJogo
		this.capaDoJogo = resultado.capaDoJogo
		this.descricaoDoJogo = resultado.descricaoDoJogo
		this.precoDoJogo = resultado.precoDoJogo

	}

	comprandoJogo(): void {
		alert('Jogo comprado com sucesso!');
	}

	adicionandoAoCarrinho(): void {
		alert('Jogo adicionado ao carrinho com sucesso!');
	}
}
