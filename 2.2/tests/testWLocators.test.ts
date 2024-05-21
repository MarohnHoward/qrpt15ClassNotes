import { Builder, By, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require('chromedriver'); 
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

describe('practice locators in tests', () => {
    beforeEach(async () => {
        await driver.get('https://www.google.com/'); 
    }); 
    afterAll(async () => {
        await driver.quit(); 
    }); 
    const searchBar: By = By.name('q'); 
    const results: By = By.id('rcnt'); 

    test('searching for baseball scores', async () => {
        await driver.findElement(searchBar).sendKeys('Mint Chip Ice Cream\n'); 
        let resultsText = await driver.findElement(results).getText(); 
        expect(resultsText).toContain('Mint Chip'); 
        await driver.sleep(3000); 
    }); 
}); 