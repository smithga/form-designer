import { FormDesignerPage } from './app.po';

describe('form-designer App', function() {
  let page: FormDesignerPage;

  beforeEach(() => {
    page = new FormDesignerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
