import { StoriesPage } from '../../pageobjects/storiespage.po';
import { browser, logging, element, by } from 'protractor';

describe('Stories Page', () => {
  const page = new StoriesPage();

  beforeAll(async () => {
    console.log('Starting Play Test');
    await page.navigateTo();
  });

  beforeEach(async () => {});

  it('should see stories landing page', async () => {
    await page.expectVisibility(page.storiesHeadline);
    await page.scrollStart(page.storiesHeadline);
  });

  it('should see stories landing page and click on pagination', async () => {
    await page.navigateToWeb(page.storiesAllUrl);
    await page.expectVisibility(page.storiesPagination);

    await page.scrollCenter(page.storiesPagination);
    await page.storiesPagination.click();
    await page.expectVisibility(page.storiesPagination);
    await page.scrollEnd(page.storiesPagination);
  });

  it('Legacy Videos Shown in Legacy Articles', async () => {
    await page.navigateToWeb(page.storiesArchiveUrl);
    await browser.sleep(3000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser
    //   .manage()
    //   .logs()
    //   .get(logging.Type.BROWSER);
    // expect(logs).not.toContain(
    //   jasmine.objectContaining({
    //     level: logging.Level.SEVERE
    //   } as logging.Entry)
    // );
  });
});
