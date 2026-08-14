import { test, expect } from '@playwright/test';

test.beforeEach( async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

        await page.close()
});


test('homepage', async ({ page }) => {

     await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html')
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
await page.close()

})

test.only('logout', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();   

    await page.locator('[id="react-burger-menu-btn"]').click();
    await page.locator('[id="logout_sidebar_link"]').click();


    await page.close()
})