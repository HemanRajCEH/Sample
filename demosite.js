const puppeteer = require('puppeteer');

(async() => {

    const browser = await puppeteer.launch({
        "headless": false
    });
    const page = await browser.newPage();
    await page.goto("http://opensource-demo.orangehrmlive.com/");
    await page.waitForTimeout(2500);
    await browser.close();
})();