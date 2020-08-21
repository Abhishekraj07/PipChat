 import { AppPage } from './app.po';
//import { browser, logging } from 'protractor';
import { browser, by, element,logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should display Title testing', () => {
    page.navigateTo();
    browser.pause();
    expect(page.getTitleText()).toEqual('testing');
  });
  it('should display text Points', () => {
    page.navigateTo();
    browser.pause();
    expect(page.getPointsText()).toEqual('Points');
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
