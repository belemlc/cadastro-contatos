import { Injectable } from '@angular/core';
import { Contato } from './contato-model';
import { CONTATOS } from './contato-mock';

@Injectable()
export class ContatoService {
  public getContatos(): Promise<Contato[]> {
    return Promise.resolve(CONTATOS);
  }
}
