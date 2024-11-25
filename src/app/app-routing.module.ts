import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ConteudoJogoComponent } from './paginas/conteudo-jogo/conteudo-jogo.component';

const routes: Routes = [{
	path: '',
	component: HomeComponent,
},
{
	path: 'conteudo-jogo/:id',
	component: ConteudoJogoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
