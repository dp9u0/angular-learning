import { App3InputPage } from './app.po';

describe('app3-input App', () => {
  let page: App3InputPage;

  beforeEach(() => {
    page = new App3InputPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
