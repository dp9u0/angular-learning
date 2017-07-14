import { App7AttributeDirectivesPage } from './app.po';

describe('app7-attribute-directives App', () => {
  let page: App7AttributeDirectivesPage;

  beforeEach(() => {
    page = new App7AttributeDirectivesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
