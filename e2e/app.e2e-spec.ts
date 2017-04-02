import { AngularheroappPage } from './app.po';

describe('angularheroapp App', () => {
  let page: AngularheroappPage;

  beforeEach(() => {
    page = new AngularheroappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
