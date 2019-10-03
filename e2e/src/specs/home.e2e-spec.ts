import { AppPage } from '../pageobjects/app.po';
import { browser, logging } from 'protractor';
import { async } from 'q';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeAll(async () => {
    console.log('Starting Home Test');
  });

  beforeEach(async () => {
    page = new AppPage();
    await page.navigateTo();
  });

  it('should display welcome message', async () => {
    await expect(page.getTitleText()).toEqual('Test Like a User');
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
