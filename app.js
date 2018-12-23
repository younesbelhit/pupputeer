const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {


  const username = 'johndoe@gamil.com';
  const password = 'johndoe';

  try {
    const browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2' });

    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    await page.waitFor(3000).then(async () => {

      await page.type('input[name="username"]', username, { delay: 100 });

      await page.type('input[name="password"]', password, { delay: 100 });

      await page.click('button[type="submit"]');

    }).catch(err => {
      console.error(err);
    });

    await page.waitForSelector('.piCib');

    await page.waitFor(4000);

    await page.click('button.bIiDR');


    // tap search : 
    await page.waitFor(3000);
    await page.waitForSelector('.LWmhU');
    await page.type('.XTCLo', 'lalla moulati', { delay: 100 });

    await page.waitFor(2000);

    //click to search result:
    await page.waitForSelector('.fuqBx');
    await page.click('.yCE8d');

    await page.waitFor(2000);

    const followButton = await page.$('._5f5mN');
    const className = await followButton.getProperty('className');

    console.log(className.toString());

    await page.waitForSelector('.vBF20');
    await page.click('._5f5mN');

    await page.waitFor(2000);

    var cards = await page.$$('div.FyNDV');
  

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    await browser.close();

  } catch (err) {
    console.error(err);
  }

})();

