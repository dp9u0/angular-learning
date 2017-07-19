import { App10RoutePage } from './app.po';

describe('app10-route App', () => {
  let page: App10RoutePage;

  beforeEach(() => {
    page = new App10RoutePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
