import { PlayPage } from '../../pageobjects/playpage.po';
import { browser, logging, element, by } from 'protractor';

describe('Play Page', () => {
  const page = new PlayPage();

  beforeAll(async () => {
    console.log('Starting Play Test');
    await page.navigateTo();
  });

  beforeEach(async () => {});

  it('should see travel destinations and packages', async () => {
    await page.expectElement(page.playTravelDestination);
    await page.scrollStart(page.playTravelDestination);
  });
  it('should see featured course', async () => {
    await page.expectElement(page.playFeatureCourse);
    await page.scrollCenter(page.playFeatureCourse);
  });

  it('should display list of states in play search', async () => {
    await page.scrollEnd(page.playSearchBar);
    await page.playSearchBar.click();
    await page.playSearchBar.sendKeys('Alabama');
  });

  it('should Browse Courses by State', async () => {
    await page.scrollEnd(page.playSearchBar);
    await page.playSearchBar.sendKeys(' state');
    await page.playSearch.click();
    await browser.sleep(2000);
  });

  it('should Browse Courses by City', async () => {
    await page.navigateTo();
    await page.playSearchBar.sendKeys('city');
    await page.playSearch.click();
    await browser.sleep(2000);
  });

  it('should access course facility', async () => {
    await page.navigateToWeb(page.playCourseFacilityUrl);
    await page.expectElement(page.playFacilityCoaches);
    await page.scrollCenter(page.playFacilityCoaches);
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
