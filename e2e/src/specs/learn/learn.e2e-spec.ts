import { LearnPage } from '../../pageobjects/learnpage.po';
import { browser, logging } from 'protractor';

const page = new LearnPage();

describe('Learn Page', () => {
  beforeAll(async () => {
    console.log('Starting Learn Test');
    await page.navigateTo();
  });

  beforeEach(async () => {});

  it('Learn | View promoted instructional content', async () => {
    await page.expectVisibility(page.learnHero);
  });
  /* 
  it('should close gdrp banner', async () => {
    await page.expectVisibility(page.bannerGDRP);
    await page.bannerGDRP.click();
    await page.expectInVisibility(page.bannerGDRP);
  });
 */
  it('Learn | Access content related to instructional approach', async () => {
    await page.scrollCenter(page.learnInstructional);
  });

  it('Learn | Browse instructional content', async () => {
    await page.scrollCenter(page.learnBrowseInstructional);
    await page.learnBrowseInstructional.click();
  });

  it('Learn | View instructional content', async () => {
    await page.scrollCenter(page.learnViewInstructional);
    await page.learnViewInstructional.click();
    await browser.sleep(1000);
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
