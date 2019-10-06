import { protractor } from 'protractor/built/ptor';

import { browser, element } from 'protractor';

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
  constructor() {
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

  async loaded() {
    return browser.wait(
      async () => {
        return await this.pageLoaded();
      },
      this.timeout.xl,
      'timeout: waiting for page to load. The url is: ' + this.url
    );
  }

  async goto() {
    await browser.get(this.url, this.timeout.xl);
    return await this.loaded();
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
    browser
      .actions()
      .mouseMove(element(elem))
      .perform();
  }

  async expectAndFocus(elem) {
    browser.isElementPresent(elem);
    browser
      .actions()
      .mouseMove(elem)
      .perform();
  }

  async expectElement(elem) {
    browser.wait(EC.visibilityOf(elem));
  }

  async expectAndFocusTime(elem, duration) {
    browser.wait(EC.visibilityOf(elem), duration);
    browser
      .actions()
      .mouseMove(elem)
      .perform();
  }
}
