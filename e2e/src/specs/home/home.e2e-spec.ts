import { HomePage } from '../../pageobjects/homePage.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: HomePage;

  beforeAll(async () => {
    console.log('Starting Home Test');
    page = new HomePage();
    await page.navigateTo();
  });

  beforeEach(async () => {});

  it('should display headline', async () => {
    debugger;
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    // expect(logs).not.toContain(
    //   jasmine.objectContaining({
    //     level: logging.Level.SEVERE
    //   } as logging.Entry)
    // );
  });
});
