import {test, expect} from '@playwright/test';

test('demo login test 1', async ({page}) => {

await page.goto('https://demo.applitools.com/')
await page.pause()
await page.locator('[placeholder="Enter your username"]').fill('Eddie')
await page.locator('[placeholder="Enter your password"]').fill('secret_sauce')
await page.locator('.form-check-input').click()

//await page.waitForSelector('[id="log-in"]')
await page.locator('[id="log-in"]').click()
})

test('demo login test2', async ({page}) => {

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.pause()
 await page.locator('[placeholder="Username"]').fill('Admin')
 await page.locator('[placeholder="Password"]').fill('admin123')
 await page.locator('[type="submit"]').click()

})

test('demo login test3', async ({page}) => {

    await page.pause()
    await page.goto('https://admin-demo.nopcommerce.com/login')
    await page.locator('input[type="email"]').fill('admin@yourstore.com')
    await page.locator('input[type="password"]').fill('admin')
    await page.locator('button[type="submit"]').click()
    await page.waitforUrl('https://admin-demo.nopcommerce.com/admin/')
    await page.locator('a[href="/logout"]').click()

})