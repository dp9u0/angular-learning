import { App2DisplayingDataPage } from './app.po';

describe('app2-displaying-data App', () => {
  let page: App2DisplayingDataPage;

  beforeEach(() => {
    page = new App2DisplayingDataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
