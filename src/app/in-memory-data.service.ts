import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contato } from './contatos/contato-model';

export class InMemoryDataService implements InMemoryDbService {
    createDb(): {} {
        let contatos: Contato[] = [
            {id: 1, nome: 'Madruga', email: 'madruga@mail.com', telefone: '(21) 9999-8888'},
            {id: 2, nome: 'Chaves', email: 'chaves@mail.com', telefone: '(21) 7777-8888'},
            {id: 3, nome: 'Dona Florinda', email: 'florinda@mail.com', telefone: '(21) 7777-0008'},
            {id: 4, nome: 'Seu Barriga', email: 'barriga@mail.com', telefone: '(21) 9988-3308'},
        ];
        return {contatos};
    }
}