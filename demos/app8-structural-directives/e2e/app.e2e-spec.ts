import { App8StructuralDirectivesPage } from './app.po';

describe('app8-structural-directives App', () => {
  let page: App8StructuralDirectivesPage;

  beforeEach(() => {
    page = new App8StructuralDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
