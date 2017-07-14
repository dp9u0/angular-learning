import { App9PipesPage } from './app.po';

describe('app9-pipes App', () => {
  let page: App9PipesPage;

  beforeEach(() => {
    page = new App9PipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
