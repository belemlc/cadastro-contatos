import { CadastroContatosPage } from './app.po';

describe('cadastro-contatos App', () => {
  let page: CadastroContatosPage;

  beforeEach(() => {
    page = new CadastroContatosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
