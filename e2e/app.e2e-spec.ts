import { SearchAPIPage } from './app.po';

describe('search-api App', () => {
  let page: SearchAPIPage;

  beforeEach(() => {
    page = new SearchAPIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
