import {page, test, expect} from '@playwright/test';

test('Assertion demo', async ({page}) => { 

await page.goto('https://kitchen.applitools.com')
await page.pause()

// Check element Present/Not present
await expect(page.locator('text=The Kitchen')).toHaveCount(1);
await page.$('text=The Kitchen')

//  Check element Visible/Hidden
await expect(page.locator('text=The Kitchen')).toBeVisible()
//await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

// Check element  Enabled/Disabled
await expect(page.locator('text=The Kitchen')).toBeEnabled()
//await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

//  How to add Soft Assertions
//await expect.soft(page.locator('text=The Kitchen')).toHaveText('XYZ')

//  Check element Text matches value or not
await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
//await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD')

//  *Assert Element attribute 
 await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')


//  Check Url of the page
await expect(page).toHaveURL('https://kitchen.applitools.com/');

//  Check Title of the page
await expect(page).toHaveTitle(/.*Kitchen/);

//Check Page matches screenshot Visual Validation
await expect(page).toHaveScreenshot();



})