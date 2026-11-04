import {expect, test} from '@playwright/test';

test('has title', async ({page}) => {
    await page.goto('http://localhost:5173');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/my-app/);
});

test('get started link', async ({page}) => {
    await page.goto('http://localhost:5173');

    // Click the get started link.
    await page.waitForSelector('[data-testid="currency-value"]');
    await page.getByRole('link', {name: 'Docs'}).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', {name: 'Docs'})).toBeVisible();
});


test('swiches currency', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.waitForSelector('[data-testid="currency-value"]');
    await page.getByRole('button', {name: 'Switch currency'}).click()

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByText('Current eur rate is:')).toBeVisible();
});


test('keeps the visualization', async ({page}) => {
    await page.goto('http://localhost:5173');

    await page.waitForSelector('[data-testid="currency-value"]');
    await page.getByRole('button', {name: 'Switch currency'}).click();

    await expect(page).toHaveScreenshot({
        maxDiffPixelRatio: 0.00001, // 1% of the image
        mask: [page.getByTestId('currency-value')]
    });

    // Click the get started link.
    await page.getByRole('link', {name: 'Docs'}).click();

    await expect(page).toHaveScreenshot({
        maxDiffPixelRatio: 0.00001, // 1% of the image
        mask: [page.getByTestId('currency-value')]
    });
});
