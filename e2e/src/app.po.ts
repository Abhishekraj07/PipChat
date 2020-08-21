import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h1')).getText() as Promise<string>;
  }
  getPointsText()
  {
    return element(by.css('span')).getText() as Promise<string>;

  }

  // FirstPage(){
  //   return browser.get('/helloPage');
  // }
  // getAboutFirstPage(){
  //   return element(by.css('h1')).getText();
  // }
}
