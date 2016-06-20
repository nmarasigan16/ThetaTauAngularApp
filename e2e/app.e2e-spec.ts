import { ThetaTauAngularAppPage } from './app.po';

describe('theta-tau-angular-app App', function() {
  let page: ThetaTauAngularAppPage;

  beforeEach(() => {
    page = new ThetaTauAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
