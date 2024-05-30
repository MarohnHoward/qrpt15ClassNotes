//importing the class from the page object
import { GooglePage } from "../googlePagePractice";
//import what we need for our chrome to run 
import { Builder, Capabilities, ChromiumWebDriver, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver'); 
//build our instance of chrome
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build(); 
//pull over the class from the page object and set it as a variable
const page = new GooglePage(driver, 'https://www.google.com/'); 
//write test
test('do a search', async () => {
    await page.navigate(); 
    await page.search('Movies Near Me'); 
    await page.driver.sleep(2000)
    await page.getResults(); 
    await page.driver.quit(); 
}); 