import { protractor } from 'protractor/built/ptor';

import { browser, element, ElementFinder, by } from 'protractor';

const EC = protractor.ExpectedConditions;
export default class BasePage {
  timeout: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
  url: string;
  pageLoaded: any;

  bannerGDRP: ElementFinder;
  searchNavButton: ElementFinder;
  searchNavInput: ElementFinder;
  constructor() {
    this.bannerGDRP = element(
      by.css('div.MuiDrawer-root.MuiDrawer-docked button')
    );

    this.searchNavButton = element(by.css('header button'));

    this.searchNavInput = element(by.css('nav input'));

    /**
     * wrap this.timeout. (ms) in t-shirt sizes
     */
    this.timeout = {
      xs: 420,
      s: 1000,
      m: 2000,
      l: 5000,
      xl: 9000,
      xxl: 15000
    };

    protractor.ElementFinder.prototype.getWidth = async function() {
      return await this.getSize().then(size => {
        return size.width;
      });
    };
  }

  async navigateTo() {
    return await browser.get(browser.baseUrl);
  }

  isVisible(locator) {
    return protractor.ExpectedConditions.visibilityOf(locator);
  }

  isNotVisible(locator) {
    return protractor.ExpectedConditions.invisibilityOf(locator);
  }

  inDom(locator) {
    return protractor.ExpectedConditions.presenceOf(locator);
  }

  notInDom(locator) {
    return protractor.ExpectedConditions.stalenessOf(locator);
  }

  isClickable(locator) {
    return protractor.ExpectedConditions.elementToBeClickable(locator);
  }

  hasText(locator, text) {
    return protractor.ExpectedConditions.textToBePresentInElement(
      locator,
      text
    );
  }

  and(arrayOfFunctions) {
    return protractor.ExpectedConditions.and(arrayOfFunctions);
  }

  titleIs(title) {
    return protractor.ExpectedConditions.titleIs(title);
  }

  hasClass(locator, klass) {
    return locator.getAttribute('class').then(classes => {
      return classes.split(' ').indexOf(klass) !== -1;
    });
  }

  async hitEnter() {
    await browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }
  /**
   * switches focus to a new (last) window
   */
  async switchToNewWindow() {
    await browser.getAllWindowHandles().then(handles => {
      browser.switchTo().window(handles[handles.length - 1]);
    });
  }

  async closeNewWindow() {
    await browser.getAllWindowHandles().then(handles => {
      browser.close();
      // the parent should be 2 less than the length of all found window handlers
      // browser.switchTo().window(handles.length - 2);
    });
  }

  async focusMouse(elem) {
    await browser
      .actions()
      .mouseMove(elem)
      .perform();
  }

  async expectAndFocus(elem) {
    await browser.isElementPresent(elem);
    await browser
      .actions()
      .mouseMove(elem)
      .perform();
  }

  async expectElement(elem) {
    await browser.wait(EC.presenceOf(elem), 10000);
  }
  async expectVisibility(elem) {
    await browser.wait(EC.visibilityOf(elem), 5000);
  }
  
  async expectClickable(elem) {
    await browser.wait(EC.elementToBeClickable(elem), 5000);
  }
  async expectAndScroll(elem) {
    await browser.wait(EC.presenceOf(elem), 10000);
    await browser.executeScript(
      'arguments[0].scrollIntoView(true)',
      elem.getWebElement()
    );
  }

  async expectAndFocusTime(elem, duration) {
    browser.wait(EC.presenceOf(elem), duration);
    browser
      .actions()
      .mouseMove(elem)
      .perform();
  }

  async scrollCenter(ele) {
    await browser.executeScript(
      'arguments[0].scrollIntoView({block: "center"})',
      ele.getWebElement()
    );
  }

  async scrollStart(ele) {
    await browser.executeScript(
      'arguments[0].scrollIntoView({block: "start"})',
      ele.getWebElement()
    );
  }

  async scrollEnd(ele) {
    await browser.executeScript(
      'arguments[0].scrollIntoView({block: "end"})',
      ele.getWebElement()
    );
  }

  async scrollNearest(ele) {
    await browser.executeScript(
      'arguments[0].scrollIntoView({block: "nearest"})',
      ele.getWebElement()
    );
  }

  async sendEnter() {
    await browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform();
  }
}
