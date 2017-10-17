import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoService } from './contato.service';
import { ContatosListaComponent } from './contatos-lista.component';
import { ContatoDetalheComponent } from './contato-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    ContatoRoutingModule,
    FormsModule
  ],
  declarations: [
    ContatoDetalheComponent,
    ContatosListaComponent
  ],
  exports: [
    ContatoDetalheComponent,
    ContatosListaComponent
  ],
  providers: [
    ContatoService
  ]
})
export class ContatosModule {}
