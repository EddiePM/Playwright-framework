import {test, expect} from '@playwright/test';

test('Selectors', async ({page}) => {

    await page.goto('https://www.saucedemo.com/')
await page.pause()

//username click for properties
await page.locator('id=user-name').click()
await page.locator('id=user-name').fill('Sammy')

//using CSS selector
//#login-button 
//await page.locator('#login-button').click()

//using xpatch selector
await page.locator('xpath=//input[@name="password"]').fill('secret_sauce')


//using text

await page.locator('text=Login').click()

})
