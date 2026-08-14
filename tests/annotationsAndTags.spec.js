import { test, expect } from '@playwright/test';

test.skip('Test one', async ({ page }) => {
    //test is skipped
})


test.fail('not yet ready @fail', async ({ page }) => {

})


test.fixme('test to be fixed', async ({ page }) => {

})

test.skip('skip this test if', async ({ page }) => {
    test.skip(process.platform === 'win32', 'Skipping on Windows');

})

//tags

test('test login page @fast', async ({ page }) => {



})