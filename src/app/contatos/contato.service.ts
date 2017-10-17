import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Contato } from './contato-model';
import { CONTATOS } from './contato-mock';

@Injectable()
export class ContatoService {

  private apiContatos: string = 'app/contatos';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(public http: Http) {}

  public getContatos(): Promise<Contato[]> {
    return this.http.get(this.apiContatos)
      .toPromise()
      .then(response => response.json() as Contato[])
      .catch(this.handleError);
  }

  public getContato(id: number): Promise<Contato> {
    return this.getContatos()
      .then((contatos: Contato[]) => contatos.find(contato => contato.id === id));
  }

  create(contato: Contato): Promise<Contato> {
    return this.http.post(this.apiContatos, JSON.stringify(contato), {headers: this.headers})
      .toPromise()
      .then((response: Response) => response.json() as Contato)
      .catch(this.handleError);
  }

  update(contato: Contato): Promise<Contato> {
    const url = `${this.apiContatos}/${contato.id}`;
    return this.http
    .put(url, JSON.stringify(contato), {headers: this.headers})
    .toPromise()
    .then(() => contato as Contato)
    .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.log('Error: ', error);
    return Promise.reject(error.message || error);
  }

  public getContatosSlowly(): Promise<Contato[]> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
      console.log('Resolvendo primeira then');
    }).then(() => {
      console.log('Resolvendo segunda then');
      return 'Olá Angular 4';
    }).then((param: string) => {
      console.log(param);
      console.log('Resolvendo terceira then');
    }).then(() => {
      console.log('getContatos')
      return this.getContatos()
    });
  }
}
