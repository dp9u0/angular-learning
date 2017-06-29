import { App4FormPage } from './app.po';

describe('app4-form App', () => {
  let page: App4FormPage;

  beforeEach(() => {
    page = new App4FormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
