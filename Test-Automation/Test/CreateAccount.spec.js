const { test, expect } = require("@playwright/test");




test('Register user account', async ({ page }) => {


    let rand1 = (Math.random() + 1).toString(36).substring(7);
    var email = (rand1 + "@atu.ie");

    await page.goto('http://ponyos-watercolour-art-classes-dev.s3-website-eu-west-1.amazonaws.com/#/home');
    await expect(page).toHaveTitle('art-class');
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldEmail').click();
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldEmail').fill(email);
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldEmail').press('Tab');
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldPassword').fill('password');
    await page.locator('form').filter({ hasText: 'E-mailPasswordPassword ConfirmationYour NameSign up' }).locator('#fldPassword').press('Tab');
    await page.getByLabel('Password Confirmation').fill('password');
    await page.getByLabel('Password Confirmation').press('Tab');
    await page.getByLabel('Your Name').fill('atuDevOps');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.getByRole('button', { name: 'Go to Home' }).click();
    await page.waitForTimeout(2000);

})

test('Verify student can Enroll in the specific course', async ({ page }) => {
    await page.goto('http://ponyos-watercolour-art-classes-dev.s3-website-eu-west-1.amazonaws.com/#/home')
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').fill('pawar@atu.ie');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Courses' }).click();
    await page.waitForTimeout(2000);
    await page.locator('#btnEnroll_Sosuke').click();
    // await page.getByRole('button', { name: 'Enroll' }).click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    // await page.getByRole('button', { name: 'Enroll' }).click();
    await page.locator('#btnEnroll_Sosuke').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('button', { name: 'ok' }).click();
});

test('Verify user student can unenroll from the specific course', async ({ page }) => {

    await page.goto('http://ponyos-watercolour-art-classes-dev.s3-website-eu-west-1.amazonaws.com/#/home')
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').click();
    await page.getByLabel('E-mail').fill('pawar@atu.ie');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('password');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: 'Courses' }).click();
    await page.waitForTimeout(2000);
    // await page.getByRole('button', { name: 'Remove' }).click();
    await page.locator('#btnRemove_Sosuke').click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.locator('#btnRemove_Sosuke').click();
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.getByRole('button', { name: 'Ok' }).click();

});


