import { AngularHackDayPage } from './app.po';

describe('angular-hack-day App', function() {
  let page: AngularHackDayPage;

  beforeEach(() => {
    page = new AngularHackDayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
