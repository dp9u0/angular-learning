import { App6TemplateSyntaxPage } from './app.po';

describe('app6-template-syntax App', () => {
  let page: App6TemplateSyntaxPage;

  beforeEach(() => {
    page = new App6TemplateSyntaxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
