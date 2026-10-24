import { test, expect } from './fixtures';


test.describe('SauceDemo purchase flow', () => {
  test('standard user can log in and complete checkout', async ({ page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,}) => {
      
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/\/inventory\.html/);
    await expect(inventoryPage.title).toBeVisible();

    await inventoryPage.addToCart('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.openCart();
    await expect(page).toHaveURL(/\/cart\.html/);
    await expect(await cartPage.productVisible('Sauce Labs Backpack')).toBeTruthy();

    await cartPage.openCheckout();
    await checkoutPage.fillCustomerInfo('QA', 'Engineer', '10001');

    await expect(page).toHaveURL(/\/checkout-step-two\.html/);
    await expect(page.getByText('Checkout: Overview')).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

    await checkoutPage.finishCheckout();
    await expect(checkoutPage.orderCompleteHeader).toHaveText('Thank you for your order!');
  });
});
