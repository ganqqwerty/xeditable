import { XeditablePage } from './app.po';

describe('xeditable App', () => {
  let page: XeditablePage;

  beforeEach(() => {
    page = new XeditablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
