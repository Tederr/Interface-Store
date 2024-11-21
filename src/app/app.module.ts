import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { CardComponent } from './componentes/card/card.component';
import { BarraMenuComponent } from './componentes/barra-menu/barra-menu.component';
import { CardRotuloComponent } from './componentes/card/card-rotulo/card-rotulo.component';
import { CardPrecoComponent } from './componentes/card/card-preco/card-preco.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    BarraMenuComponent,
    CardRotuloComponent,
    CardPrecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
