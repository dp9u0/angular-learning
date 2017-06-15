import { App1HelloWorldPage } from './app.po';

describe('app1-hello-world App', () => {
  let page: App1HelloWorldPage;

  beforeEach(() => {
    page = new App1HelloWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
