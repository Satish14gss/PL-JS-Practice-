const {test, expect} = require('@playwright/test');

test ('user login', async({page}) => {

    await page.goto('https://www.udemy.com/');

    await page.waitForTimeout(5000)

    await page.locator("//*[@id='__next']/div/div/header/div[6]/a/span").click();
    await page.waitForTimeout(5000)

    await page.locator("name=email").fill('udemy@buildbot.tech');
    await page.locator("id=form-group--3").fill('Welcome@123');

    await page.click(type="submit");

    //await expect('https://www.udemy.com/join/two-factor/?next=https%3A%2F%2Fwww.udemy.com%2F&enforceMFAMessaging=1');

    await page.close();

})