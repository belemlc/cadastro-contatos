import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ContatoService } from './contato.service';
import { Contato } from './contato-model';

@Component({
  moduleId: module.id,
  selector: 'contato-detalhe',
  templateUrl: 'contato-detalhe.component.html',
})
export class ContatoDetalheComponent implements OnInit {

  contato: Contato;
  private isNew: boolean = true;

  constructor(
    public route: ActivatedRoute,
    public location: Location,
    public contatoService: ContatoService) {}

  ngOnInit() {
    console.log('onInit');
    this.contato = new Contato(0, '', '', '');
    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];
      if (id) {
        this.isNew = false;
        this.contatoService.getContato(id)
          .then((contato: Contato) => {
            console.log(contato);
            this.contato = contato;
        }).catch(err => console.log('Contato Error: ', err));
      }
    });
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean): object {
    return {
      'form-group': true,
      'has-danger': !isValid && !isPristine,
      'has-success': isValid && !isPristine
    }
  }

  getFormControlClass(isValid: boolean, isPristine: boolean): object {
    return {
      'form-control': true,
      'has-control-danger': !isValid && !isPristine,
      'has-control-success': isValid && !isPristine
    }
  }

  onSubmit() {
    let promise;
    if (this.isNew) {
      promise = this.contatoService.create(this.contato);
    } else {
      promise = this.contatoService.update(this.contato);
    }

    promise.then(contato => this.location.back());
  }
}
