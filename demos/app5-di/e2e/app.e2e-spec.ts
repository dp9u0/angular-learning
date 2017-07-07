import { App5DiPage } from './app.po';

describe('app5-di App', () => {
  let page: App5DiPage;

  beforeEach(() => {
    page = new App5DiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
