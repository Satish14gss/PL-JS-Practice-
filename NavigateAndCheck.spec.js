const {test, expect} = require('@playwright/test'); // modules importing from playwright

test( 'Navigate and Check' , async ({page}) => { // async : written before function to return a promise

    await page.goto('https://www.google.co.in/'); // await : it waits fot the page to load, written only inside function
    
    const page_Title = page.title(); // new const variable for title check
    console.log('Page title is : ' + page_Title); // printing the page name in output

    expect(page).toHaveURL('https://www.google.co.in/'); // testing the opened url with this url

    await expect(page).toHaveTitle('Google'); // testing the page name with expected output

    await page.close(); // closing the page

} )