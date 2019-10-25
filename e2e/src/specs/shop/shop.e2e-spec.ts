import { ShopPage } from '../../pageobjects/shoppage.po';
import { browser, logging, element, by } from 'protractor';

describe('Play Page', () => {
  const page = new ShopPage();

  beforeAll(async () => {
    console.log('Starting Play Test');
    await page.navigateTo();
  });

  beforeEach(async () => {});

  it('Change trade and value guide option', async () => {
    await page.expectVisibility(page.shopTradeButton);
    await page.shopTradeButton.click();
  });

  it('Show Official PGA Merchandise ', async () => {
    await page.expectVisibility(page.shopMerchandise);

    const headlineText = await page.shopMerchandise.getText();
    expect(headlineText).toEqual('Official PGA Merchandise');
    await page.scrollStart(page.shopMerchandise);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    );
  });
});
